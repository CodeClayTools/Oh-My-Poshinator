import { describe, it, expect } from 'vitest';
import { ThemeValidator } from '../../../src/parser/validator';
import { Theme } from '../../../src/parser/types';
import fs from 'fs';
import path from 'path';

describe('ThemeValidator', () => {
  const validator = new ThemeValidator();

  describe('validateTheme', () => {
    it('should validate a complex theme', () => {
      const complexTheme = JSON.parse(
        fs.readFileSync(
          path.join(__dirname, '../../fixtures/complex.json'),
          'utf-8'
        )
      ) as Theme;

      expect(validator.validateTheme(complexTheme)).toBe(true);
      expect(validator.getErrors()).toHaveLength(0);
    });

    it('should reject an invalid theme', () => {
      const invalidTheme = {
        blocks: [
          {
            type: 'invalid',
            alignment: 'left',
            segments: []
          }
        ]
      } as unknown as Theme;

      expect(validator.validateTheme(invalidTheme)).toBe(false);
      expect(validator.getErrors()).toContain('blocks/0/type: must be equal to one of the allowed values');
    });
  });

  describe('validateColor', () => {
    it('should validate hex colors', () => {
      expect(validator.validateColor('#ffffff')).toBe(true);
      expect(validator.validateColor('#000000')).toBe(true);
      expect(validator.validateColor('#123456')).toBe(true);
    });

    it('should validate ANSI colors', () => {
      expect(validator.validateColor('black')).toBe(true);
      expect(validator.validateColor('lightRed')).toBe(true);
      expect(validator.validateColor('default')).toBe(true);
    });

    it('should validate 256 colors', () => {
      expect(validator.validateColor('0')).toBe(true);
      expect(validator.validateColor('255')).toBe(true);
      expect(validator.validateColor('128')).toBe(true);
    });

    it('should validate special keywords', () => {
      expect(validator.validateColor('transparent')).toBe(true);
      expect(validator.validateColor('foreground')).toBe(true);
      expect(validator.validateColor('background')).toBe(true);
      expect(validator.validateColor('parentForeground')).toBe(true);
      expect(validator.validateColor('parentBackground')).toBe(true);
      expect(validator.validateColor('accent')).toBe(true);
    });

    it('should validate palette references', () => {
      expect(validator.validateColor('p:primary')).toBe(true);
      expect(validator.validateColor('p:error')).toBe(true);
      expect(validator.validateColor('p:custom-color')).toBe(true);
    });

    it('should reject invalid colors', () => {
      expect(validator.validateColor('invalid')).toBe(false);
      expect(validator.validateColor('#gggggg')).toBe(false);
      expect(validator.validateColor('256')).toBe(false);
      expect(validator.validateColor('p:')).toBe(false);
    });
  });

  describe('validateTemplate', () => {
    it('should validate templates', () => {
      expect(validator.validateTemplate('{{ .Path }}')).toBe(true);
      expect(validator.validateTemplate('{{ if .Root }}root{{ end }}')).toBe(true);
      expect(validator.validateTemplate('{{ .Env.VAR }}')).toBe(true);
    });

    it('should reject invalid templates', () => {
      expect(validator.validateTemplate('')).toBe(false);
    });
  });

  describe('validateCache', () => {
    it('should validate cache configurations', () => {
      expect(validator.validateCache({ duration: '1h', strategy: 'folder' })).toBe(true);
      expect(validator.validateCache({ duration: '30m', strategy: 'session' })).toBe(true);
      expect(validator.validateCache({ duration: 'none', strategy: 'folder' })).toBe(true);
    });

    it('should reject invalid cache configurations', () => {
      expect(validator.validateCache({ duration: 'invalid', strategy: 'folder' })).toBe(false);
      expect(validator.validateCache({ duration: '1h', strategy: 'invalid' })).toBe(false);
      expect(validator.validateCache({ duration: '', strategy: 'folder' })).toBe(false);
    });
  });

  describe('validateStyle', () => {
    it('should validate styles', () => {
      expect(validator.validateStyle('powerline')).toBe(true);
      expect(validator.validateStyle('plain')).toBe(true);
      expect(validator.validateStyle('diamond')).toBe(true);
      expect(validator.validateStyle('accordion')).toBe(true);
    });

    it('should reject invalid styles', () => {
      expect(validator.validateStyle('invalid')).toBe(false);
      expect(validator.validateStyle('')).toBe(false);
    });
  });
}); 
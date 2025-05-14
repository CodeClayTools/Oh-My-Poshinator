import { describe, it, expect } from 'vitest';
import { validateTheme } from '../../../src/parser/validator';
import { loadTheme, loadInvalidTheme } from '../../utils/fixtures';

describe('Theme Schema Validation', () => {
  it('should validate a valid theme', async () => {
    const theme = loadTheme('basic.json');
    const result = await validateTheme(theme);
    expect(result).toBe(true);
  });

  it('should reject an invalid theme', async () => {
    const theme = loadInvalidTheme('malformed.json');
    const result = await validateTheme(theme);
    expect(result).toBe(false);
  });
}); 
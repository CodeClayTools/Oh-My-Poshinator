import { describe, it, expect } from 'vitest';
import { ThemeParser } from '../../../src/parser';
import { loadTheme, loadInvalidTheme } from '../../utils/fixtures';

describe('ThemeParser', () => {
  it('should parse a valid theme JSON string', async () => {
    const theme = loadTheme('basic.json');
    const result = await ThemeParser.parse(JSON.stringify(theme));
    expect(result).toEqual(theme);
  });

  it('should throw an error for invalid JSON', async () => {
    await expect(ThemeParser.parse('{invalid json}')).rejects.toThrow('Invalid JSON format');
  });

  it('should throw an error for invalid theme structure', async () => {
    const invalidTheme = loadInvalidTheme('malformed.json');
    await expect(ThemeParser.parse(JSON.stringify(invalidTheme))).rejects.toThrow('Invalid theme');
  });
}); 
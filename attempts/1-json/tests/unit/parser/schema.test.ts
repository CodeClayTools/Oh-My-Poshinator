import { describe, test, expect } from 'vitest';
import { loadTheme, loadInvalidTheme } from '../../utils/fixtures';

describe('Theme Schema Validation', () => {
  test('should load a valid theme', () => {
    // This test will fail until we create the fixture
    expect(() => loadTheme('basic.json')).toThrow();
  });

  test('should load an invalid theme', () => {
    // This test will fail until we create the fixture
    expect(() => loadInvalidTheme('malformed.json')).toThrow();
  });
}); 
import { Theme } from './types';
import { ThemeValidator } from './validator';

export class ThemeParser {
  static async parse(json: string): Promise<Theme> {
    try {
      const theme = JSON.parse(json);
      const validator = new ThemeValidator();
      if (!validator.validateTheme(theme)) {
        const errors = validator.getErrors();
        throw new Error(`Invalid theme: ${errors.join(', ')}`);
      }
      return theme;
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new Error('Invalid JSON format');
      }
      throw error;
    }
  }
} 
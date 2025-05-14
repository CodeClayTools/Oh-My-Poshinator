import { Theme } from './types';
import { validateTheme, getValidationErrors } from './validator';

export class ThemeParser {
  static async parse(json: string): Promise<Theme> {
    try {
      const theme = JSON.parse(json);
      
      if (!await validateTheme(theme)) {
        const errors = getValidationErrors();
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
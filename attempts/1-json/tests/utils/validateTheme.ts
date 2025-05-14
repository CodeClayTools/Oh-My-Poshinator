import { readFileSync } from 'fs';
import { join } from 'path';
import { ThemeParser } from '../../src/parser';

export async function validateThemeFile(filePath: string): Promise<{
  isValid: boolean;
  errors?: string[];
  theme?: any;
}> {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const theme = await ThemeParser.parse(content);
    return { isValid: true, theme };
  } catch (error) {
    if (error instanceof Error) {
      return { isValid: false, errors: [error.message] };
    }
    return { isValid: false, errors: ['Unknown error occurred'] };
  }
}

// Example usage:
// const result = await validateThemeFile('path/to/theme.json');
// console.log(result); 
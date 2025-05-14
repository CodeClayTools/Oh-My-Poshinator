import Ajv, { ValidateFunction, ErrorObject } from 'ajv';
import addFormats from 'ajv-formats';
import { themeSchema } from './schema';
import { Theme } from './types';

export class ThemeValidator {
  private ajv: Ajv;
  private validate: ValidateFunction;

  constructor() {
    this.ajv = new Ajv({
      allErrors: true,
      verbose: true,
      strict: false
    });
    addFormats(this.ajv);
    this.validate = this.ajv.compile(themeSchema);
  }

  validateTheme(theme: Theme): boolean {
    return this.validate(theme) as boolean;
  }

  getErrors(): string[] {
    if (!this.validate.errors) {
      return [];
    }

    return this.validate.errors.map((error: ErrorObject) => {
      const path = error.instancePath ? error.instancePath.slice(1) : 'root';
      const message = error.message || 'Unknown error';
      return `${path}: ${message}`;
    });
  }

  validateColor(color: string): boolean {
    // Check if it's a hex color
    if (/^#[0-9a-fA-F]{6}$/.test(color)) {
      return true;
    }

    // Check if it's an ANSI color
    const ansiColors = [
      'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'default',
      'darkGray', 'lightRed', 'lightGreen', 'lightYellow', 'lightBlue', 'lightMagenta', 'lightCyan', 'lightWhite'
    ];
    if (ansiColors.includes(color)) {
      return true;
    }

    // Check if it's a 256 color
    if (/^[0-9]{1,3}$/.test(color)) {
      const num = parseInt(color);
      return num >= 0 && num <= 255;
    }

    // Check if it's a special keyword
    const specialKeywords = ['transparent', 'foreground', 'background', 'parentForeground', 'parentBackground', 'accent'];
    if (specialKeywords.includes(color)) {
      return true;
    }

    // Check if it's a palette reference
    if (/^p:[a-zA-Z0-9_-]+$/.test(color)) {
      return true;
    }

    return false;
  }

  validateTemplate(template: string): boolean {
    // Basic template validation
    // This is a simplified check - in reality, we'd want to parse the template
    // and validate its syntax and variables
    return typeof template === 'string' && template.length > 0;
  }

  validateCache(cache: { duration: string; strategy: string }): boolean {
    if (!cache.duration || !cache.strategy) {
      return false;
    }

    // Validate duration format (e.g., "1h", "30m", "45s", "none")
    if (cache.duration !== 'none' && !/^[0-9]+[hms]$/.test(cache.duration)) {
      return false;
    }

    // Validate strategy
    return ['folder', 'session'].includes(cache.strategy);
  }

  validateStyle(style: string): boolean {
    return ['powerline', 'plain', 'diamond', 'accordion'].includes(style);
  }
} 
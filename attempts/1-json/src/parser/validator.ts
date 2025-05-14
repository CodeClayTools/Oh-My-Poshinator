import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { themeSchema } from './schema';
import { Theme } from './types';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const validate = ajv.compile(themeSchema);

export async function validateTheme(theme: unknown): Promise<boolean> {
  return validate(theme);
}

export function getValidationErrors(): string[] {
  return (validate.errors || []).map(error => {
    const path = error.instancePath || error.schemaPath;
    return `${path} ${error.message}`;
  });
} 
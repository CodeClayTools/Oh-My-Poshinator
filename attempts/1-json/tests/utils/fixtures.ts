import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export function loadFixture(path: string): any {
  const fixturePath = join(__dirname, '..', 'fixtures', path);
  const content = readFileSync(fixturePath, 'utf-8');
  return JSON.parse(content);
}

export function loadTheme(path: string): any {
  return loadFixture(`valid-themes/${path}`);
}

export function loadInvalidTheme(path: string): any {
  return loadFixture(`invalid-themes/${path}`);
} 
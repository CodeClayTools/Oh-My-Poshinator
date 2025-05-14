import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { Theme } from '../../src/parser/types';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const fixturesDir = join(__dirname, '../fixtures');

export function loadFixture(path: string): any {
  const fixturePath = join(__dirname, '..', 'fixtures', path);
  const content = readFileSync(fixturePath, 'utf-8');
  return JSON.parse(content);
}

export function loadTheme(filename: string): Theme {
  const content = readFileSync(join(fixturesDir, filename), 'utf-8');
  return JSON.parse(content);
}

export function loadInvalidTheme(filename: string): unknown {
  const content = readFileSync(join(fixturesDir, filename), 'utf-8');
  return JSON.parse(content);
} 
import { readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { validateThemeFile } from './utils/validateTheme';

const __dirname = dirname(fileURLToPath(import.meta.url));
const themesDir = join(__dirname, 'fixtures/real-themes');

async function validateThemes() {
  try {
    const files = readdirSync(themesDir);
    console.log('Validating theme files...\n');

    for (const file of files) {
      if (!file.endsWith('.json')) continue;

      console.log(`Validating ${file}...`);
      const result = await validateThemeFile(join(themesDir, file));

      if (result.isValid) {
        console.log('✅ Valid theme file\n');
      } else {
        console.log('❌ Invalid theme file:');
        console.log('Errors:', result.errors?.join('\n'), '\n');
      }
    }
  } catch (error) {
    console.error('Error reading theme files:', error);
  }
}

validateThemes(); 
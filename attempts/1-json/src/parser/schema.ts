import { JSONSchema7 } from 'json-schema';

const colorSchema: JSONSchema7 = {
  oneOf: [
    { type: 'string', pattern: '^#[0-9a-fA-F]{6}$' }, // Hex color
    { type: 'string', enum: [
      'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'default',
      'darkGray', 'lightRed', 'lightGreen', 'lightYellow', 'lightBlue', 'lightMagenta', 'lightCyan', 'lightWhite'
    ]}, // ANSI colors
    { type: 'string', pattern: '^[0-9]{1,3}$' }, // 256 color palette
    { type: 'string', enum: ['transparent', 'foreground', 'background', 'parentForeground', 'parentBackground', 'accent'] }, // Special keywords
    { type: 'string', pattern: '^p:[a-zA-Z0-9_-]+$' } // Palette reference
  ]
};

const styleSchema: JSONSchema7 = {
  type: 'string',
  enum: ['powerline', 'plain', 'diamond', 'accordion']
};

const cacheSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    duration: { type: 'string', pattern: '^[0-9]+[hms]$|^none$' },
    strategy: { type: 'string', enum: ['folder', 'session'] }
  },
  required: ['duration', 'strategy']
};

const segmentSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    type: { type: 'string' },
    style: styleSchema,
    powerline_symbol: { type: 'string' },
    leading_powerline_symbol: { type: 'string' },
    invert_powerline: { type: 'boolean' },
    leading_diamond: { type: 'string' },
    trailing_diamond: { type: 'string' },
    foreground: colorSchema,
    foreground_templates: { 
      type: 'array',
      items: { type: 'string' }
    },
    background: colorSchema,
    background_templates: {
      type: 'array',
      items: { type: 'string' }
    },
    template: { type: 'string' },
    templates: {
      type: 'array',
      items: { type: 'string' }
    },
    templates_logic: { type: 'string', enum: ['first_match', 'join'] },
    properties: { type: 'object' },
    interactive: { type: 'boolean' },
    alias: { type: 'string' },
    min_width: { type: 'integer', minimum: 0 },
    max_width: { type: 'integer', minimum: 0 },
    cache: cacheSchema,
    include_folders: {
      type: 'array',
      items: { type: 'string' }
    },
    exclude_folders: {
      type: 'array',
      items: { type: 'string' }
    },
    force: { type: 'boolean' }
  },
  required: ['type', 'style']
};

const blockSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    type: { type: 'string', enum: ['prompt', 'rprompt'] },
    alignment: { type: 'string', enum: ['left', 'right'] },
    newline: { type: 'boolean' },
    filler: { type: 'string' },
    overflow: { type: 'string', enum: ['break', 'hide'] },
    leading_diamond: { type: 'string' },
    trailing_diamond: { type: 'string' },
    segments: {
      type: 'array',
      items: segmentSchema
    },
    force: { type: 'boolean' }
  },
  required: ['type', 'alignment', 'segments']
};

const paletteSchema: JSONSchema7 = {
  type: 'object',
  additionalProperties: colorSchema
};

const palettesSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    template: { type: 'string' },
    list: {
      type: 'object',
      additionalProperties: paletteSchema
    }
  },
  required: ['template', 'list']
};

const cycleSchema: JSONSchema7 = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      background: colorSchema,
      foreground: colorSchema
    },
    required: ['background', 'foreground']
  }
};

export const themeSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    $schema: { type: 'string' },
    final_space: { type: 'boolean' },
    version: { type: 'integer' },
    blocks: {
      type: 'array',
      items: blockSchema
    },
    palette: paletteSchema,
    palettes: palettesSchema,
    cycle: cycleSchema,
    console_title_template: { type: 'string' },
    terminal_background: colorSchema,
    accent_color: colorSchema,
    var: { type: 'object' },
    shell_integration: { type: 'boolean' },
    enable_cursor_positioning: { type: 'boolean' },
    patch_pwsh_bleed: { type: 'boolean' },
    maps: {
      type: 'object',
      properties: {
        user_name: { type: 'object' },
        host_name: { type: 'object' },
        shell_name: { type: 'object' }
      }
    }
  },
  required: ['blocks']
}; 
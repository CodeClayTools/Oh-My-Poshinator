export type Color = string; // Hex, ANSI, 256, special keywords, or palette reference

export type Style = 'powerline' | 'plain' | 'diamond' | 'accordion';

export interface Cache {
  duration: string;
  strategy: 'folder' | 'session';
}

export interface Segment {
  type: string;
  style: Style;
  powerline_symbol?: string;
  leading_powerline_symbol?: string;
  invert_powerline?: boolean;
  leading_diamond?: string;
  trailing_diamond?: string;
  foreground?: Color;
  foreground_templates?: string[];
  background?: Color;
  background_templates?: string[];
  template?: string;
  templates?: string[];
  templates_logic?: 'first_match' | 'join';
  properties?: Record<string, any>;
  interactive?: boolean;
  alias?: string;
  min_width?: number;
  max_width?: number;
  cache?: Cache;
  include_folders?: string[];
  exclude_folders?: string[];
  force?: boolean;
}

export interface Block {
  type: 'prompt' | 'rprompt';
  alignment: 'left' | 'right';
  newline?: boolean;
  filler?: string;
  overflow?: 'break' | 'hide';
  leading_diamond?: string;
  trailing_diamond?: string;
  segments: Segment[];
  force?: boolean;
}

export interface Palette {
  [key: string]: Color;
}

export interface Palettes {
  template: string;
  list: {
    [key: string]: Palette;
  };
}

export interface ColorCycle {
  background: Color;
  foreground: Color;
}

export interface Maps {
  user_name?: Record<string, string>;
  host_name?: Record<string, string>;
  shell_name?: Record<string, string>;
}

export interface Theme {
  $schema?: string;
  final_space?: boolean;
  version?: number;
  blocks: Block[];
  palette?: Palette;
  palettes?: Palettes;
  cycle?: ColorCycle[];
  console_title_template?: string;
  terminal_background?: Color;
  accent_color?: Color;
  var?: Record<string, any>;
  shell_integration?: boolean;
  enable_cursor_positioning?: boolean;
  patch_pwsh_bleed?: boolean;
  maps?: Maps;
} 
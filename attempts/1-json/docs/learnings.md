# Oh-My-Posh Theme System Learnings

## Core Structure

### Blocks
- Blocks are the top-level containers for segments
- Two types: `prompt` (left-aligned) and `rprompt` (right-aligned)
- Can have multiple blocks with different alignments
- Support overflow handling (`break` or `hide`)
- Can use filler characters to join left/right blocks
- Can force rendering even when empty

### Segments
- Building blocks of the prompt
- Each segment has:
  - Type (e.g., path, git, node)
  - Style (powerline, plain, diamond, accordion)
  - Colors (foreground/background)
  - Template for content
  - Properties specific to segment type
  - Optional caching strategy
  - Optional folder inclusion/exclusion

### Styles
1. **Powerline**
   - Uses a single symbol to separate segments
   - Takes background color from previous segment
   - Can have issues in Git Bash
   - Supports inverted powerline

2. **Plain**
   - Simple colored text on transparent background
   - Requires foreground color

3. **Diamond**
   - Uses different start/end symbols
   - Symbols take segment background as foreground
   - Good for: < text > style segments

4. **Accordion**
   - Similar to powerline
   - Shows even when disabled (without text)
   - Creates collapsible effect

## Color System

### Color Types
1. **True Color**
   - Hex format (e.g., `#CB4B16`)
   - Full RGB color support

2. **ANSI Colors**
   - 8 basic: black, red, green, yellow, blue, magenta, cyan, white
   - 8 extended: darkGray, lightRed, lightGreen, lightYellow, lightBlue, lightMagenta, lightCyan, lightWhite
   - `default` keyword

3. **256 Color Palette**
   - Numeric representation (0-255)

4. **Special Keywords**
   - `transparent`
   - `foreground` (current segment's foreground)
   - `background` (current segment's background)
   - `parentForeground` (previous segment's foreground)
   - `parentBackground` (previous segment's background)
   - `accent` (OS accent color, Windows/macOS only)

### Color Features
1. **Color Templates**
   - Array of string templates
   - Evaluated in order until non-empty result
   - Falls back to base color if no template matches

2. **Color Overrides**
   - Syntax: `<foreground,background>text</>`
   - Can override both or just one color
   - Example: `<#ffffff,#000000>white on black</>`

3. **Palettes**
   - Named color collections
   - Reference format: `p:colorName`
   - Can be conditional (light/dark mode)
   - Supports recursive resolution
   - Fallback to transparent for invalid references

## Template System

### Global Properties
- `.Root` - is user root/admin
- `.PWD` - current working directory
- `.AbsolutePWD` - unaltered working directory
- `.PSWD` - PowerShell non-filesystem working directory
- `.Folder` - current working folder
- `.Shell` - shell name
- `.ShellVersion` - shell version
- `.SHLVL` - shell level
- `.UserName` - current user
- `.HostName` - host name
- `.Code` - last exit code
- `.Jobs` - background jobs count
- `.OS` - operating system
- `.WSL` - in WSL yes/no
- `.Templates` - templates result
- `.PromptCount` - prompt counter
- `.Version` - Oh My Posh version

### Text Decoration
- `<b>bold</b>`
- `<u>underline</u>`
- `<o>overline</o>`
- `<i>italic</i>`
- `<s>strikethrough</s>`
- `<d>dimmed</d>`
- `<f>blink</f>`
- `<r>reversed</r>`

### Cross-Segment References
- Use `{{ .Segments.Segment }}` to reference other segments
- Requires segment to be present in config
- Can use aliases to distinguish between same-type segments

## Caching System

### Cache Strategies
1. **Folder**
   - Caches based on current working directory
   - Separate value for each directory
   - Good for language/source control segments

2. **Session**
   - Caches based on shell session
   - Good for segments that don't need frequent updates

### Cache Configuration
```json
{
  "cache": {
    "duration": "1h",
    "strategy": "folder"
  }
}
```

## Folder Inclusion/Exclusion
- Supports regex patterns
- Case-insensitive on Windows/macOS
- Case-sensitive on Linux
- Supports both `/` and `\` as separators
- `~` matches user's home directory
- Can combine include/exclude patterns

## Next Steps
1. Update schema to match official specification
2. Implement comprehensive validation
3. Create theme analyzer
4. Build editor features
5. Add preview system 
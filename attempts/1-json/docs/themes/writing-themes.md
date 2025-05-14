# Writing Oh-My-Posh Themes

This guide explains how to create and customize themes for Oh-My-Posh.

## File Format

- Theme files must use the `.omp.json` extension
- Files must contain valid JSON
- The JSON must conform to the Oh-My-Posh theme schema

## Basic Structure

A theme consists of two main parts:

1. Global style settings
2. Segments (prompt components)

```json
{
  "style": {
    "foreground": "#ffffff",
    "background": "#000000"
  },
  "segments": [
    // Segment definitions go here
  ]
}
```

## Global Style

The `style` object defines default appearance settings:

```json
{
  "style": {
    "foreground": "#ffffff",  // Text color
    "background": "#000000",  // Background color
    "bold": false,           // Bold text
    "italic": false,         // Italic text
    "underline": false       // Underlined text
  }
}
```

## Segments

Segments are the building blocks of your prompt. Each segment has:

1. A type (e.g., `path`, `git`, `node`)
2. Style settings
3. Properties specific to that segment type

```json
{
  "type": "path",
  "style": {
    "foreground": "#ffffff",
    "background": "#61AFEF"
  },
  "properties": {
    "style": "folder"
  }
}
```

## Common Segment Types

### Path Segment
Shows the current directory path.

```json
{
  "type": "path",
  "style": {
    "foreground": "#ffffff",
    "background": "#61AFEF"
  },
  "properties": {
    "style": "folder",      // How to display the path
    "max_depth": 3,        // Maximum directory depth to show
    "max_width": 20        // Maximum width in characters
  }
}
```

### Git Segment
Shows Git repository information.

```json
{
  "type": "git",
  "style": {
    "foreground": "#ffffff",
    "background": "#98C379"
  },
  "properties": {
    "display_status": true,        // Show branch status
    "display_stash_count": true,   // Show number of stashed changes
    "display_upstream_icon": true  // Show upstream branch indicator
  }
}
```

### Node Segment
Shows Node.js version information.

```json
{
  "type": "node",
  "style": {
    "foreground": "#ffffff",
    "background": "#E06C75"
  },
  "properties": {
    "display_version": true,  // Show Node.js version
    "display_package": true   // Show package.json version
  }
}
```

## Color Formats

Colors can be specified in several formats:

- Hex: `"#ffffff"`
- RGB: `"rgb(255, 255, 255)"`
- Named colors: `"white"`

## Best Practices

1. **Consistent Styling**
   - Use a consistent color palette
   - Maintain readable contrast
   - Keep segment widths reasonable

2. **Performance**
   - Limit the number of segments
   - Use simple properties when possible
   - Avoid expensive operations in properties

3. **Readability**
   - Use clear, distinct colors
   - Add spacing between segments
   - Keep text concise

4. **Maintenance**
   - Comment your theme file
   - Use meaningful color names
   - Document custom properties

## Example Theme

Here's a complete example theme:

```json
{
  "segments": [
    {
      "type": "path",
      "style": {
        "foreground": "#ffffff",
        "background": "#61AFEF",
        "bold": true
      },
      "properties": {
        "style": "folder",
        "max_depth": 3
      }
    },
    {
      "type": "git",
      "style": {
        "foreground": "#ffffff",
        "background": "#98C379"
      },
      "properties": {
        "display_status": true,
        "display_stash_count": true
      }
    }
  ],
  "style": {
    "foreground": "#ffffff",
    "background": "#2C323C"
  }
}
```

## Validation

Use the Oh-My-Poshinator to validate your themes:

```bash
npm run validate
```

This will check your theme against the schema and report any issues.

## Common Issues

1. **Invalid JSON**
   - Missing commas
   - Unmatched brackets
   - Invalid color formats

2. **Schema Violations**
   - Missing required properties
   - Invalid property values
   - Unknown segment types

3. **Style Issues**
   - Poor contrast
   - Inconsistent colors
   - Overlapping segments

## Resources

- [Oh-My-Posh Documentation](https://ohmyposh.dev/)
- [Color Picker](https://www.w3schools.com/colors/colors_picker.asp)
- [JSON Validator](https://jsonlint.com/) 
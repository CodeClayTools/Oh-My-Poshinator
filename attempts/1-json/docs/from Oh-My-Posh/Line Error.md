Line error
info
This feature only works in powershell for the time being.

Line error, when enabled, replaces the last part of the prompt when the text entered is invalid. It leverages PSReadLine's -PromptText setting by adding two distinct prompts. One for a valid line, and one for when there's an error. As PSReadLine will rewrite the last part of your prompt with the value of either based on the line's context, you will need to make sure everything is compatible with your config as these values are only set once on shell start.

There are two config settings you need to tweak:

valid_line: displays when the line is valid (again)
error_line: displays when the line is faulty
You can use go text/template templates extended with sprig to enrich the text.

Configuration
You need to extend or create a custom theme with your prompt overrides. For example:

json
yaml
toml
{
  "valid_line": {
    "background": "transparent",
    "foreground": "#ffffff",
    "template": "<#e0def4,#286983> </><#286983,transparent></> "
  },
  "error_line": {
    "background": "transparent",
    "foreground": "#ffffff",
    "template": "<#eb6f92,#286983> </><#286983,transparent></> "
  }
}

Properties
Name	Type	Description
background	string	color
foreground	string	color
template	string	a fully featured template - defaults to empty
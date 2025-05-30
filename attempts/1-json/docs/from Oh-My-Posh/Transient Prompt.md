Transient prompt
info
This feature only works in nu, fish, zsh, powershell (ConstrainedLanguage mode unsupported), bash (with ble.sh) and cmd for the time being.

Transient prompt, when enabled, replaces the prompt with a simpler one to allow more screen real estate. You can use go text/template templates extended with sprig to enrich the text. All template functionality is available, even reusing cross segment template properties from the previous primary prompt run.

Typically, your prompt will simply leave the prompt on the screen when you execute a command (or press enter) like so:

Before Transient

By enabling Transient Prompt, you can replace the prompt with some other content for a cleaner console as shown here:

After Transient

Configuration
You need to extend or create a custom theme with your transient prompt. For example:

json
yaml
toml
{
  "transient_prompt": {
    "background": "transparent",
    "foreground": "#ffffff",
    "template": "{{ .Shell }}> "
  }
}

Properties
Name	Type	Description
foreground	string	color
foreground_templates	array	color templates
background	string	color
background_templates	array	color templates
template	string	a go text/template template extended with sprig utilizing the properties below - defaults to {{ .Shell }}>
filler	string	when you want to create a line with a repeated set of characters spanning the width of the terminal. Will be added after the template text
newline	boolean	add a newline before the prompt
Enable the feature
Oh My posh handles enabling the feature automatically for all shells except cmd when the config contains a transient prompt configuration. For cmd, you can run the command below once to enable the feature permanently:

clink set prompt.transient always
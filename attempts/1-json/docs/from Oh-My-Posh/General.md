General
Oh My Posh renders your prompt based on the definition of blocks (like Lego) which contain one or more segments. A really simple configuration could look like this. The default format is json, but we also support toml and yaml. There's a schema available which is kept up-to-date and helps with autocomplete and validation of the configuration.

info
There are a few themes available which are basically predefined configurations. You can use these as they are, or as a starting point to create your own configuration.

json
yaml
toml
{
  "$schema": "https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/schema.json",
  "final_space": true,
  "version": 3,
  "blocks": [
    {
      "type": "prompt",
      "alignment": "left",
      "segments": [
        {
          "type": "path",
          "style": "powerline",
          "powerline_symbol": "\uE0B0",
          "foreground": "#ffffff",
          "background": "#61AFEF",
          "properties": {
            "style": "folder"
          }
        }
      ]
    }
  ]
}

With this configuration, a single powerline segment is rendered that shows the name of the folder you're currently in. To set this configuration in combination with a Oh My Posh executable, use the --config flag to set a path to a file containing the above code. The --shell universal flag is used to print the prompt without escape characters to see the prompt as it would be shown inside a prompt function for your shell.

caution
The command below will not persist the configuration for your shell but print the prompt in your terminal. If you want to use your own configuration permanently, adjust the prompt configuration to use your custom configuration.

oh-my-posh print primary --config sample.json --shell uni

If all goes according to plan, you should see the prompt being printed out on the line below. In case you see a lot of boxes with question marks, set up your terminal to use a supported font before continuing.

tip
The --config flag can accept either a local filepath or a remotely hosted config file.

For example, the following is a valid --config flag: --config 'https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/jandedobbeleer.omp.json'

Settings
Name	Type	Default	Description
final_space	boolean		when true adds a space at the end of the prompt
pwd	string		notify terminal of current working directory, values can be osc99, osc7 or osc51 depending on your terminal. Supports templates
terminal_background	string		color - terminal background color, set to your terminal's background color when you notice black elements in Windows Terminal or the Visual Studio Code integrated terminal
accent_color	string		color - accent color, used as a fallback when the accent color is not supported
var	map[string]any		config variables to use in templates. Can be any value
shell_integration	boolean	false	enable shell integration using FinalTerm's OSC sequences. Works in bash, cmd (Clink v1.14.25+), fish, powershell and zsh
enable_cursor_positioning	boolean	false	enable fetching the cursor position in bash and zsh to allow automatic hiding of leading newlines when at the top of the shell
patch_pwsh_bleed	boolean	false	patch a PowerShell bug where the background colors bleed into the next line at the end of the buffer (can be removed when this is merged)
upgrade	Upgrade		enable auto upgrade or the upgrade notice. See Upgrade
iterm_features	[]string	false	enable iTerm2 specific features:
prompt_mark: add the iterm2_prompt_mark function for supported shells
current_dir: expose the current directory for iTerm2
remote_host: expose the current remote and user for iTerm2
maps	Maps		a list of custom text mappings
Maps
Name	Type	Description
user_name	object	text replacement mapping for user names
host_name	object	text replacement mapping for host names
shell_name	object	text replacement mapping for shell names
json
yaml
toml
{
  "maps": {
    "user_name": {
      "jan": "🚀",
      "root": "⚡"
    },
    "host_name": {
      "laptop123": "work"
    }
  }
}

JSON Schema Validation
As mentioned above, Oh My Posh configurations can utilize JSON Schema to validate their contents. Configurations should include a link to the external schema document which prescribes the appropriate structure and contents for various elements. If your code editor is configured to use JSON Schema, it will compare your configuration to the external document, and issue warnings for discrepancies.

For example, given the following code:

...
"segments": [
  {
    "type": "an_invalid_entry",
    "template": "{{ if gt .Code 0 }}\uf134{{ end }}",
  }
]
...

Warnings will be raised for type, since an_invalid_entry is not in the list of acceptable values, as well as for the entire segment item (enclosed in {}), since it lacks the required style key. Take advantage of these warnings, and ignore them at your peril.

Accepted Formats
Oh My Posh supports three file formats for configurations: json, yaml, and toml.

Various converters exist to convert between these, although they aren't perfect and will require manual adjustment. Notably, the schema implementation for json is as follows:

{
  "$schema": "https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/schema.json"
}

While for yaml:

# yaml-language-server: $schema=https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/schema.json


Converters won't catch this change, so you will need to adjust manually.
Secondary prompt
info
This feature only works in powershell, zsh and bash for the time being.

The secondary prompt is displayed when a command text spans multiple lines. The default is > .

You can use go text/template templates extended with sprig to enrich the text. Environment variables are available, just like the console_title_template functionality.

Configuration
You need to extend or create a custom theme with your secondary prompt override. For example:

json
yaml
toml
{
  "secondary_prompt": {
    "background": "transparent",
    "foreground": "#ffffff",
    "template": "-> "
  }
}

Properties
Name	Type	Description
background	string	color
foreground	string	color
template	string	a go text/template template extended with sprig utilizing the properties below - defaults to >
Template (info)
Name	Type	Description
.Root	boolean	is the current user root/admin or not
.Shell	string	the current shell name
.UserName	string	the current user name
.HostName	string	the host name
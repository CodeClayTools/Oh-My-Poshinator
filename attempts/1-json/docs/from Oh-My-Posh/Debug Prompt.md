Debug prompt
info
This feature only works in powershell for the time being.

The debug prompt is displayed when you debug a script from the command line or Visual Studio Code. The default is [DBG]: .

You can use go text/template templates extended with sprig to enrich the text. Environment variables are available, just like the console_title_template functionality.

Configuration
You need to extend or create a custom theme with your debug prompt override. For example:

json
yaml
toml
{
  "debug_prompt": {
    "background": "transparent",
    "foreground": "#ffffff",
    "template": "Debugging "
  }
}

Properties
Name	Type	Description
foreground	string	color
foreground_templates	string	color templates
background	string	color
background_templates	string	color templates
template	string	a go text/template template extended with sprig utilizing the properties below - defaults to [DBG]:
Template (info)
Name	Type	Description
.Root	boolean	is the current user root/admin or not
.PWD	string	the current working directory
.Folder	string	the current working folder
.Shell	string	the current shell name
.UserName	string	the current user name
.HostName	string	the host name
.Code	int	the last exit code
.Env.VarName	string	Any environment variable where VarName is the environment variable name
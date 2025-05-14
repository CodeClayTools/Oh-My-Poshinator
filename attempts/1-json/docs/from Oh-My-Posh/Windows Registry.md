Windows Registry Key Query
What
Display the content of the requested Windows registry key.

Supported registry key types:

SZ (displayed as string value)
EXPAND_SZ (displayed as string value)
BINARY (displayed as string value)
DWORD (displayed in upper-case 0x hex)
QWORD (displayed in upper-case 0x hex)
Sample Configuration
json
yaml
toml
{
  "type": "winreg",
  "style": "powerline",
  "powerline_symbol": "",
  "foreground": "#ffffff",
  "background": "#444444",
  "template": "  {{ .Value }}",
  "properties": {
    "path": "HKLM\\software\\microsoft\\windows nt\\currentversion\\buildlab",
    "fallback": "unknown"
  }
}

Properties
Name	Type	Default	Description
path	string		registry path to the desired key using backslashes and with a valid root HKEY name. Ending path with \ will get the (Default) key from that path
fallback	string		the value to fall back to if no entry is found
Template (info)
default template
{{ .Value }}

Properties
Name	Type	Description
.Value	string	The result of your query, or fallback if not found.
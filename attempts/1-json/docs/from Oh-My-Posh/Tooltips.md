Tooltips
info
Due to limitations (or not having found a way just yet), this feature only works in fish, zsh, powershell (ConstrainedLanguage mode unsupported) and cmd (as of Clink v1.2.46+) for the time being.

Tooltip Demo

Tooltips are segments that are rendered as a right-aligned prompt while you're typing certain keywords. They behave similarly to the other segments when it comes to how and when they are shown so you can tweak them to act and look like you want. The key difference is that they can be invoked using tips which are the commands you are typing. Due to the possibility of the use of an alias, you can define for which keyword the segment should be rendered.

Configuration
You need to extend or create a custom theme with your tooltips. For example:

json
yaml
toml
{
  "blocks": [],
  "tooltips": [
    {
      "type": "git",
      "tips": [
        "git",
        "g"
      ],
      "style": "diamond",
      "foreground": "#193549",
      "background": "#fffb38",
      "leading_diamond": "",
      "trailing_diamond": "",
      "template": "{{ .HEAD }}{{ if .Staging.Changed }}  {{ .Staging.String }}{{ end }}{{ if and (.Working.Changed) (.Staging.Changed) }} |{{ end }}{{ if .Working.Changed }}  {{ .Working.String }}{{ end }}",
      "properties": {
        "fetch_status": true,
        "fetch_upstream_icon": true
      }
    }
  ]
}


This configuration will render a right-aligned git segment when you type git or g followed by a space. A tip should not include any spaces. Keep in mind that this is a blocking call, meaning that if the segment renders slow, you can't type until it's visible. Optimizations in this space are being explored.

Note that you can also define multiple tooltips for the same tip to compose tooltips for individual commands. For example, this configuration will render the AWS profile as well as the Azure subscription information when you type terraform followed by a space.

json
yaml
toml
{
  "blocks": [],
  "tooltips": [
    {
      "type": "aws",
      "tips": [
        "aws",
        "terraform"
      ],
      "style": "plain",
      "foreground": "#e0af68",
      "template": "f {{.Profile}}{{if .Region}}@{{.Region}}{{end}}"
    },
    {
      "type": "az",
      "tips": [
        "az",
        "terraform"
      ],
      "style": "plain",
      "foreground": "#b4f9f8",
      "template": " {{ .Name }}"
    }
  ]
}
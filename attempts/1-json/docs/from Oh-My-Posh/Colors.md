Colors
Standard colors
Oh My Posh supports multiple different color references, being:

True color using hex colors (for example #CB4B16).

16 ANSI color names. These include 8 basic ANSI colors and default

black red green yellow blue magenta cyan white default

as well as 8 extended ANSI colors:

darkGray lightRed lightGreen lightYellow lightBlue lightMagenta lightCyan lightWhite

256 color palette using their number representation. For example 0 is black, 1 is red, 2 is green, etc.

The transparent keyword which can be used to create either a transparent foreground override or transparent background color using the segment's foreground property.

The foreground keyword which can be used to reference the current segment's foreground color.

The background keyword which can be used to reference the current segment's background color.

The parentForeground keyword which can be used to inherit the previous active segment's foreground color.

The parentBackground keyword which can be used to inherit the previous active segment's background color.

The accent keyword which references the OS accent color (Windows and macOS only).

Color templates
Array of string templates to define the color based on the current context. Under the hood this uses go's text/template feature extended with sprig and offers a few standard properties to work with. For segments, you can look at the Template Properties section in the documentation. The general template properties are listed here.

The following sample is based on the AWS Segment.

json
yaml
toml
{
  "type": "aws",
  "style": "powerline",
  "powerline_symbol": "",
  "foreground": "#ffffff",
  "background": "#111111",
  "foreground_templates": [
    "{{if contains \"default\" .Profile}}#FFA400{{end}}",
    "{{if contains \"jan\" .Profile}}#f1184c{{end}}"
  ]
}

The logic is as follows: when foreground_templates contains an array, we will check every template line until there's one that returns a non-empty string. So, when the contents of .Profile contain the word default, the first template returns #FFA400 and that's the color that will be used. If it contains jan, it returns #f1184c. When none of the templates returns a value, the foreground value #ffffff is used as a fallback value.

Color overrides
You have the ability to override the foreground and/or background color for text in any property that accepts it. The syntax is custom but should be rather straight-forward: <foreground,background>text</>. For example, <#ffffff,#000000>this is white with black background</> <#FF479C>but this is pink</>. Anything between the color start <#FF479C> and end </> will be colored accordingly.

If you want to print a colored bracket that isn't the same as the segment's foreground, you can do so like this:

json
yaml
toml
{
  "template": "<#CB4B16>┏[</>"
}

If you also wanted to change the background color in the previous command, you would do so like this:

json
yaml
toml
{
  "template": "<#CB4B16,#FFFFFF>┏[</>"
}

To change only the background color, just omit the first color from the above string:

json
yaml
toml
{
  "template": "<,#FFFFFF>┏[</>"
}

Palette
If your configuration defined the Palette, you can use the Palette reference p:<palette key> in places where the Standard color is expected.

Defining a Palette
Palette is a set of named Standard colors. To use a Palette, define a "palette" object at the top level of your configuration:

json
yaml
toml
{
  "palette": {
    "git-foreground": "#193549",
    "git": "#FFFB38",
    "git-modified": "#FF9248",
    "git-diverged": "#FF4500",
    "git-ahead": "#B388FF",
    "git-behind": "#B388FF",
    "red": "#FF0000",
    "green": "#00FF00",
    "blue": "#0000FF",
    "white": "#FFFFFF",
    "black": "#111111"
  }
}

Color names (palette keys) can have any string value, so be creative. Color values, on the other hand, should adhere to the Standard color format.

Using a Palette
You can now use Palette references in any [Segment's][segment] foreground, foreground_templates, background, background_templates properties, and other config properties that expect Standard color value. Palette reference format is p:<palette key>. Take a look at the Git segment using Palette references:

json
yaml
toml
{
  "type": "git",
  "style": "powerline",
  "powerline_symbol": "",
  "foreground": "p:git-foreground",
  "background": "p:git",
  "background_templates": [
    "{{ if or (.Working.Changed) (.Staging.Changed) }}p:git-modified{{ end }}",
    "{{ if and (gt .Ahead 0) (gt .Behind 0) }}p:git-diverged{{ end }}",
    "{{ if gt .Ahead 0 }}p:git-ahead{{ end }}",
    "{{ if gt .Behind 0 }}p:git-behind{{ end }}"
  ]
}

Having all of the colors defined in one place allows you to import existing color configurations (usually with slight tweaking to adhere to the format), easily change colors of multiple segments at once, and have a more organized configuration overall. Be creative!

Palette references and Standard colors
Using Palette does not interfere with using Standard colors in your configuration. You can still use Standard colors everywhere. This can be useful if you want to use a specific color for a single segment element, or in a Color override (Battery segment):

json
yaml
toml
{
  "type": "battery",
  "style": "powerline",
  "invert_powerline": true,
  "powerline_symbol": "",
  "foreground": "p:white",
  "background": "p:black",
  "properties": {
    "discharging_icon": "<#ffa500>-</> ",
    "charging_icon": "+ ",
    "charged_icon": "* "
  }
}

Handling of invalid references
Should you use an invalid Palette reference as a color (for example typo p:bleu instead of p:blue), the Pallete engine will use the Transparent keyword as a fallback value. So if you see your prompt segments rendered with incorrect colors, and you are using a Palette, be sure to check the correctness of your references.

Recursive resolution
Palette allows for recursive Palette reference resolution. You can use a Palette reference as a color value in Palette. This allows you to define named colors, and use references to those colors as Palette values. For example, p:foreground and p:background will be correctly set to "#CAF0F80" and "#023E8A":

json
yaml
toml
{
  "palette": {
    "light-blue": "#CAF0F8",
    "dark-blue": "#023E8A",
    "foreground": "p:light-blue",
    "background": "p:dark-blue"
  }
}

Palettes
If you want to use a palette conditionally, for example for light or dark mode, you can define multiple palettes and a template that resolves to the palette key. The template is evaluated at runtime so your prompt can change at any time based on the outcome of the template.

Take the following configuration:

json
yaml
toml
{
  "palettes": {
    "template": "{{ if eq .Shell \"pwsh\" }}latte{{ else }}frappe{{ end }}",
    "list": {
      "latte": {
        "black": "#262B44",
        "green": "#59C9A5",
        "orange": "#F07623",
        "red": "#e64553",
        "white": "#E0DEF4",
        "yellow": "#df8e1d",
        "blue": "#7287fd"
      },
      "frappe": {
        "black": "#262B44",
        "green": "#59C9A5",
        "orange": "#F07623",
        "red": "#D81E5B",
        "white": "#E0DEF4",
        "yellow": "#F3AE35",
        "blue": "#4B95E9"
      }
    }
  }
}

In this case, when the shell is pwsh, the latte palette will be used, otherwise it uses the frappe palette. If you want, you could also add frappe as the default palette, given that one is used as a fallback when not match can be found based on what the template resolves to. In case no match is available and no palette is defined, it will also fallback to transparent for any palette color reference in templates/colors.

If you want to avoid color duplication, you can use palettes in combination with the palette property. This way you can define a color once and reuse it in multiple palettes. For example:

json
yaml
toml
{
  "palette": {
    "black": "#262B44",
    "green": "#59C9A5",
    "orange": "#F07623"
  },
  "palettes": {
    "template": "{{ if eq .Shell \"pwsh\" }}latte{{ else }}frappe{{ end }}",
    "list": {
      "latte": {
        "red": "#e64553",
        "white": "#E0DEF4",
        "yellow": "#df8e1d",
        "blue": "#7287fd"
      },
      "frappe": {
        "red": "#D81E5B",
        "white": "#E0DEF4",
        "yellow": "#F3AE35",
        "blue": "#4B95E9"
      }
    }
  }
}

info
If a color is defined in both palette and palettes, the palettes' resolved color will take precedence.

Cycle
When you want to display the same sequence of colors (background and foreground) regardless of which segments are active, you can make use of the cycle property. This property is a list of colors which are used one after the other in a continuous loop. A defined cycle always gets precedence over everything else.

json
yaml
toml
{
  "cycle": [
    {
      "background": "p:blue",
      "foreground": "p:white"
    },
    {
      "background": "p:green",
      "foreground": "p:black"
    },
    {
      "background": "p:orange",
      "foreground": "p:white"
    }
  ]
}
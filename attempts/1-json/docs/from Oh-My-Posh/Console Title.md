Console title
json
yaml
toml
{
  "console_title_template": "{{.Folder}}{{if .Root}} :: root{{end}} :: {{.Shell}}"
}

Console Title Template
The following examples illustrate possible contents for console_title_template, provided the current working directory is /usr/home/omp and the shell is zsh.

To learn more about templates and their possibilities, have a look at the template section.

{
  "console_title_template": "{{.Folder}}{{if .Root}} :: root{{end}} :: {{.Shell}}",
  // outputs:
  // when root == false: omp :: zsh
  // when root == true: omp :: root :: zsh
  "console_title_template": "{{.Folder}}", // outputs: omp
  "console_title_template": "{{.Shell}} in {{.PWD}}", // outputs: zsh in /usr/home/omp
  "console_title_template": "{{.UserName}}@{{.HostName}} {{.Shell}} in {{.PWD}}", // outputs: MyUser@MyMachine zsh in /usr/home/omp
  "console_title_template": "{{.Env.USERDOMAIN}} {{.Shell}} in {{.PWD}}" // outputs: MyCompany zsh in /usr/home/omp
}
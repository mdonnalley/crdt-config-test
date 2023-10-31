oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g crdt-config-test
$ crdt-config-test COMMAND
running command...
$ crdt-config-test (--version)
crdt-config-test/0.0.0 darwin-arm64 node-v18.15.0
$ crdt-config-test --help [COMMAND]
USAGE
  $ crdt-config-test COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`crdt-config-test hello PERSON`](#crdt-config-test-hello-person)
* [`crdt-config-test hello world`](#crdt-config-test-hello-world)
* [`crdt-config-test help [COMMANDS]`](#crdt-config-test-help-commands)
* [`crdt-config-test plugins`](#crdt-config-test-plugins)
* [`crdt-config-test plugins:install PLUGIN...`](#crdt-config-test-pluginsinstall-plugin)
* [`crdt-config-test plugins:inspect PLUGIN...`](#crdt-config-test-pluginsinspect-plugin)
* [`crdt-config-test plugins:install PLUGIN...`](#crdt-config-test-pluginsinstall-plugin-1)
* [`crdt-config-test plugins:link PLUGIN`](#crdt-config-test-pluginslink-plugin)
* [`crdt-config-test plugins:uninstall PLUGIN...`](#crdt-config-test-pluginsuninstall-plugin)
* [`crdt-config-test plugins:uninstall PLUGIN...`](#crdt-config-test-pluginsuninstall-plugin-1)
* [`crdt-config-test plugins:uninstall PLUGIN...`](#crdt-config-test-pluginsuninstall-plugin-2)
* [`crdt-config-test plugins update`](#crdt-config-test-plugins-update)

## `crdt-config-test hello PERSON`

Say hello

```
USAGE
  $ crdt-config-test hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/mdonnalley/crdt-config-test/blob/v0.0.0/src/commands/hello/index.ts)_

## `crdt-config-test hello world`

Say hello world

```
USAGE
  $ crdt-config-test hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ crdt-config-test hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/mdonnalley/crdt-config-test/blob/v0.0.0/src/commands/hello/world.ts)_

## `crdt-config-test help [COMMANDS]`

Display help for crdt-config-test.

```
USAGE
  $ crdt-config-test help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for crdt-config-test.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.20/src/commands/help.ts)_

## `crdt-config-test plugins`

List installed plugins.

```
USAGE
  $ crdt-config-test plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ crdt-config-test plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.4/src/commands/plugins/index.ts)_

## `crdt-config-test plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ crdt-config-test plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ crdt-config-test plugins add

EXAMPLES
  $ crdt-config-test plugins:install myplugin 

  $ crdt-config-test plugins:install https://github.com/someuser/someplugin

  $ crdt-config-test plugins:install someuser/someplugin
```

## `crdt-config-test plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ crdt-config-test plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ crdt-config-test plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.4/src/commands/plugins/inspect.ts)_

## `crdt-config-test plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ crdt-config-test plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ crdt-config-test plugins add

EXAMPLES
  $ crdt-config-test plugins:install myplugin 

  $ crdt-config-test plugins:install https://github.com/someuser/someplugin

  $ crdt-config-test plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.4/src/commands/plugins/install.ts)_

## `crdt-config-test plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ crdt-config-test plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help      Show CLI help.
  -v, --verbose
  --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ crdt-config-test plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.4/src/commands/plugins/link.ts)_

## `crdt-config-test plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ crdt-config-test plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ crdt-config-test plugins unlink
  $ crdt-config-test plugins remove
```

## `crdt-config-test plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ crdt-config-test plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ crdt-config-test plugins unlink
  $ crdt-config-test plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.4/src/commands/plugins/uninstall.ts)_

## `crdt-config-test plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ crdt-config-test plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ crdt-config-test plugins unlink
  $ crdt-config-test plugins remove
```

## `crdt-config-test plugins update`

Update installed plugins.

```
USAGE
  $ crdt-config-test plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.4/src/commands/plugins/update.ts)_
<!-- commandsstop -->

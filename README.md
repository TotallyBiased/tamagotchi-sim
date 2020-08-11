# Tamagotchi Sim [![build](https://circleci.com/gh/TotallyBiased/tamagotchi.svg?style=shield&circle-token=ef066a93df883a49c2d0783f2b7d603afc0f246a)](https://app.circleci.com/pipelines/github/TotallyBiased/tamagotchi)

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [User Guide](#user-guide)
- [Deployment](#deployment)
- [Requirements](#requirements)

## About <a name = "about"></a>

A multi-platform Tamagotchi Simulator

## Supported Clients

Not all terminals are supported due using [terminal-link](https://github.com/sindresorhus/terminal-link) as a dependency.
Please see [this list of supported terminals](https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda).

## Getting Started <a name = "getting_started"></a>

### OS

Notes for different OS environments.

#### Windows

By default, this project is configured for running on Windows as it was developed on Windows
as my current machine refuses to update it's Windows build that is needed to install WSL2.

#### Unix|macOS|Linux

In the `.npmrc` config, the script shell is set to Powershell to avoid NPM defaulting to CMD,
which can be problematic when using `cross-env`.

### Prerequisites

TODO: Add prerequisites.

#### Docker

TODO: Add docker instructions.

#### Non-Docker

Node version 14.0.0
NPM version x.x.x

### Installing

TODO: Add install instructions.

## User <a name = "user"></a>

TODO: Add user guide.

## Deployment <a name = "deployment"></a>

TODO: Add CICD instructions.

Node Environment variable is set via `cross-env`, and is used to determine which env config to read from.
Hot reloading is manged via `ts-node-dev`.
Code formatting is manged by `prettier`. By default, `prettier` runs on file save.

## Requirements <a name = "Requirements"></a>

TODO: Add original project requirements.

https://github.com/erikras/ducks-modular-redux

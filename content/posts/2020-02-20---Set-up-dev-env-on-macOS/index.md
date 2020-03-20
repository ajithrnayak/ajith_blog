---
title: How to setup my mac for development
date: '2020-02-20T00:00:00.000Z'
draft: false
path: "/set-up-dev-env-on-macOS"
category: "iOS Development"
tags: ["Developer Guide", "macOS Setup"]
excerpt: "A quick step-by-step guide to setup a mac for development."
---

# How to setup my mac for development

A quick step-by-step guide to setup a mac for development.

Currnet version:

macOS catalina 10.15.3

#### Know your home folder

To check your homefolder, type open terminal and type

```bash
$ pwd
# or
$ echo $HOME
```

#### Know your shell

To determine the POSIX-compliant shell (sh, dash, ksh, zsh, bash), type

```bash
$ echo $SHELL
```

#### Install Xcode

As an iOS developer, Xcode is pretty much everything I need.

Download Xcode from here [https://developer.apple.com/download/more/](https://developer.apple.com/download/more/) or the Apple App Store.

#### Install Xcode Command Line Tools

Open your Terminal and run,

```bash
$ xcode-select --install
```

If that fails, download it [directly from Apple’s site](https://developer.apple.com/download/more/), after signing-in with an Apple developer account.

#### Configure Git

Open terminal and input these (replace your name and email)

```bash
# configure git user details
$ git config --global user.name "John Doe"
$ git config --global user.email "john.doe@gmail.com"
```

A Mac has some annoying files that can be ignored by git. Let's add them,

```bash
$ nano ~/.gitignore
```

Then add these

```git
# Mac
.DS_Store
.AppleDouble
.LSOverride

# Thumbnails
._*

# Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk

# Windows
Thumbs.db

# WebStorm
.idea/

# Node
npm-debug.log
```

After you are done, activate this globally by running

```bash
$ git config --global core.excludesfile ~/.gitignore
```

#### Install oh my zsh

Updating to catalina changed `bash` to `zsh` and this tool saved my hairfall.

Read more about the tool here https://github.com/ohmyzsh/ohmyzsh

Run following command in Terminal for quick install.

```bash
$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

#### Install Homebrew

A package manager for macOS and is going to usefull for managing quite a few essential packages.

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

#### Install Cocoapods

CocoaPods is a package manager for iOS development. It is built with Ruby and is installable with the default Ruby available on macOS. Default ruby is recommended.

```bash
$ sudo gem install cocoapods
```

#### Install Fastlane

An easiest way to automate beta deployments and releases for your iOS and Android apps.

```bash
# Using RubyGems
sudo gem install fastlane -NV

# Alternatively using Homebrew
brew install fastlane
```



#### Install nvm

For nodejs development, open [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm) and to install,

you may either download and run the script manually, or use the following cURL or Wget command:

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

Open `~/.zshrc` and see if these lines are present. (if not, add it)

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

#### Install Node

Open Terminal and run following command. Remember to restart Terminal before checking for successfull installation.

```bash
$ brew install node    # this will install latest
# or
$ nvm install node    # this will install latest 
# or
$ nvm install 10.1    # this will install version 10.1
```

Or, download the latest Node.js version from [the official Node.js website](https://nodejs.org/en/), double click on the downloaded file and go through the installation process.  



To confirm that this worked, you can run `npm --version` and `node --version`.



#### Install Sourcetree

A free Git client for Mac and the one I'm very familiar with.

Either download from official website https://www.sourcetreeapp.com or from Mac Appstore.



That will do for now to set up my development environment on a macOS.



Happy Coding!
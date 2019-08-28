# Sass support for web projects


This repository contains files needed to add Sass support to a web project.

The structure has `Grunt` as task runner, `Sass` stylesheets and some default folders to use.

The intention is to be something ready to add Sass support to a web project, either wordpress or something else.

## Requeriments

* [Node JS](https://nodejs.org/en/download/) >= 8
* [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm])
* [Node Sass](https://github.com/sass/node-sass) installed globally `npm i -g node-sass`
* [Grunt]([https://gruntjs.com/getting-started](https://gruntjs.com/getting-started)) installed globally `npm i -g grunt-cli`

## Instructions

* Download latest `.zip` from [here](https://github.com/onerhinodev/grunt-sass-project/archive/master.zip).
* Extract files under project root repository.
  * If it is for use with a WP theme, extract files in the root directory of the theme.
 * Using a Terminal/Console/Powershell, got to root directory and install npm packages.
```
# npm install
``` 
* Command above will install necessary packages, allowing to use `grunt`task runner to transform Sass files into CSS.
* Remember to edit `package.json` and fill with correct project instructions, like project name, description and version.

## Compiling Sass to CSS

* Do not care about browser compatibility, `Grunt` task is using `autoprefixer` package to deal with  it.
* After finishing Sass implementation/changes, run `grunt css` to generate CSS files (normal and minified version).
* Generated files will be placed into `assets/css` folder.


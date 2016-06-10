# Introduction

[![Gitter](https://badges.gitter.im/vyakymenko/qlikview-extensions-starter-pack-es6.svg)](https://gitter.im/vyakymenko/qlikview-extensions-starter-pack-es6?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Build Status](https://travis-ci.org/vyakymenko/qlikview-extensions-developer-starter-pack-es6.svg?branch=master)](https://travis-ci.org/vyakymenko/qlikview-extensions-starter-pack-es6)
[![Build status](https://ci.appveyor.com/api/projects/status/574hck58qxf5ftmw?svg=true)](https://ci.appveyor.com/project/vyakymenko/qlikview-extensions-starter-pack-es6)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/vyakymenko/qlikview-extensions-starter-pack-es6.svg)](https://david-dm.org/vyakymenko/qlikview-extensions-starter-pack-es6)
[![devDependency Status](https://david-dm.org/vyakymenko/qlikview-extensions-starter-pack-es6/dev-status.svg)](https://david-dm.org/vyakymenko/qlikview-extensions-starter-pack-es6#info=devDependencies)

QlikView Extensions Developer Starter Pack ES6 provides fast, reliable and extensible starter for the development of QlikView Document/Object extensions.

# Version
1.1.0

# Tech

QlikView Extensions Developer Starter Pack ES6 uses a number of open source projects to work properly:

* [Gulp] - the streaming build system
* [Browserify] - awesome bundler
* [Nightwatch] - e2e testing

# How to start

**Note** that this project requires node v4.x.x or higher and npm 2.14.7.

In order to start the qlikview-extensions-starter-pack-es6 use:

```bash
$ git clone --depth 1 https://github.com/vyakymenko/qlikview-extensions-starter-pack-es6.git
$ cd qlikview-extensions-starter-pack-es6
# install the project's dependencies
$ npm install

# develop and watches all your files
$ gulp
# or
$ gulp dev

# production build with installers
$ gulp build
```

# Table of Content

- [Introduction](#introduction)
- [Version](#version)
- [Tech](#tech)
- [How to start](#how-to-start)
- [Table of Content](#table-of-content)
- [Configuration](#configuration)
- [Running tests](#running-tests)
- [Examples](#examples)
- [Directory Structure](#directory-structure)
- [In Development](#in-development)
- [License](#license)

# Configuration

Default gulp extensions development configuration file:

_You can feel free to change and updated them as you want._

```javascript
	/**
     * Project Configuration
     *
     * @path: gulp/config.js
     */
    module.exports = {
    	src: {
    		main: 'source/', // <--- Main Directory with extensions source files.
    		extensions: [ // <-- Array of extensions Folders.
    		/**
    		 * Document Extensions
    		 */
    			'Document/TestExtension', // <--- Add here each new Document Extension Folder.
    		/**
    		 * Object Extensions
    		 */
    			'Objects/TestExtension' // <--- Add here each new Object Extension Folder.
     		],
    		jswatch: [ // <--- Used for watching changes in source files.
    			'source/**/*.js',
    			'source/*.js'
    		],
    		css: [ // <--- 
    			'source/**/*.css',
    			'source/*.css'
    		],
    		constfiles: [ // <-- Constant files used for extensions.
    			'source/*.gif',
    			'source/**/*.gif',
    			'source/*.png',
    			'source/**/*.png',
    			'source/*.jpg',
    			'source/**/*.jpg',
    			'source/**/*.xml',
    			'source/*.xml',
    			'source/**/*.qvpp',
    			'source/*.qvpp',
    			'source/**/*.txt',
    			'source/*.txt',
    			'source/libs/*.js',
    			'source/**/libs/*.js',
    			'source/**/libs/**/*.js'
    		]
    	},
    	dist: {
    		main: 'dist/' // <-- Distribution folder.
    	},
    	installers: {
    		main: 'dist-installers/' // <-- Installers distribution folder.
    	}
    };
```



> In build mode, you will generate QAR installers for distributing easily your extensions.

# Running tests

_QlikView can be tested only with E2E tests so we need to use them!_

E2E Testing:

_Note: Java, Selenium is a must! WebDrivers is optional, by default it will use Firefox Driver._

More details for E2E tests API is here:

http://nightwatchjs.org/api

Before start we need to install some components:

 - [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
 - [Selenium Server / selenium-server-standalone-{VERSION}.jar ](http://selenium-release.storage.googleapis.com/index.html)
 - Configure your `nightwatch.json` file.

```sh
# For Windows
$ node nigtwatch.js

# For Mac
$ nightwatch tests

# or you can read more details on how to use and configure your e2e tests here: http://nightwatchjs.org/guide
```

# Extensions Examples

- https://github.com/vyakymenko/qlikview-extensions-starter-pack-es6/tree/master/source/Document/TestExtension - Document Extension Example.
- https://github.com/vyakymenko/qlikview-extensions-starter-pack-es6/tree/master/source/Objects/TestExtension - Object Extension Example.

# Directory Structure

```
.
├── LICENSE
├── README.md
├── gulpfile.js                <- configuration of the gulp tasks
├── nightwatch.json            <- e2e tests configuration
├── nightwatch.js
├── nightwatch.conf.js
├── package.json               <- dependencies of the project\
├── source                     <- source code of the extensions
│   ├── API                         <- exporting API dir that can be imported in extensions
│   │   └── Lambda.js
│   ├── Document                    <- Document Extensions
│   │   └── TestExtension
│   │       ├── Definition.xml
│   │       └── Script.js
│   └── Objects                     <- Object Extensions
│        └── TestExtension
│            ├── libs
│            │   ├── Definition.xml
│            │   └── Qvet.min.js
│            ├── services
│            │   └── Loader.js
│            ├── Definition.xml
│            ├── icon.png
│            └── Script.js
├── tests                      <- e2e test cases
│   └── TestDocument.js
├── gulp                       <- gulp dir 
│   └── tasks                       <- gulp tasks
│   │   ├── const.js
│   │   ├── css-minify.js
│   │   ├── installers-generator.js
│   │   ├── js-dev.js
│   │   ├── js-prod.js
│   │   └── watch.js
│   ├── config.js                   <- Extensions development configuration file
│   └── index.js
├── .editorconfig              <- editor configuration
├── .gitignore                 <- git ignore
├── .jshintrc                  <- jshint configuration
├── .stylelintrc               <- stylelint configuration
├── .travis.yml
└── appveyor.yml
```

# In Development
 - Add clean build task.
 - Add SASS Support.
 - Add example with SASS/CSS.
 - Add Documentation.
 - Add Changelog.
 
# License

MIT

   [Gulp]: <http://gulpjs.com>
   [Browserify]: <http://browserify.org/>
   [Nightwatch]: <http://nightwatchjs.org>

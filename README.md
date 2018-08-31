# Introduction

[![Greenkeeper badge](https://badges.greenkeeper.io/vyakymenko/qlikview-extensions-starter.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/vyakymenko/qlikview-extensions-starter.svg?branch=master)](https://travis-ci.org/vyakymenko/qlikview-extensions-starter)
[![Build status](https://ci.appveyor.com/api/projects/status/scyi6yaqm085yyj6?svg=true)](https://ci.appveyor.com/project/vyakymenko/qlikview-extensions-starter)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![devDependencies Status](https://david-dm.org/vyakymenko/qlikview-extensions-starter/dev-status.svg)](https://david-dm.org/vyakymenko/qlikview-extensions-starter?type=dev)

QlikView Extensions Developer Starter provides fast, reliable and extensible starter for the development of QlikView Document/Object extensions.

# Version
2.0.1

# How to start

In order to start the qlikview-extensions-starter use:

```bash
$ git clone --depth 1 https://github.com/vyakymenko/qlikview-extensions-starter.git
$ cd qlikview-extensions-starter

# install dependencies
$ npm install

# develop and watches all your files
$ npm run start

# production build with installers
$ npm run build
```

# Table of Content

- [Introduction](#introduction)
- [Version](#version)
- [Tech](#tech)
- [How to start](#how-to-start)
- [Table of Content](#table-of-content)
- [Configuration](#configuration)
- [Examples](#examples)
- [Directory Structure](#directory-structure)
- [License](#license)

# Configuration

Default gulp extensions development configuration file:

_You can feel free to change and updated them as you want._

```javascript
/**
 * Configuration
 */
export const Config: any = {
  src: {
    main: 'src/',
    extensions: {
      document: 'src/Document',
      objects: 'src/Objects',
    },
    ts: [
      'src/**/*.ts',
      'src/*.ts'
    ],
    scss: [
      'src/**/*.scss',
      'src/*.scss'
    ],
    assets: [
      'src/*.gif',
      'src/**/*.gif',
      'src/*.png',
      'src/**/*.png',
      'src/*.jpg',
      'src/**/*.jpg',
      'src/**/*.svg',
      'src/**/*.wbl',
      'src/*.wbl',
      'src/**/*.xml',
      'src/*.xml',
      'src/**/*.qext',
      'src/*.qext',
      'src/**/*.txt',
      'src/*.txt',
      'src/**/*.json',
      'src/*.json',
      'src/lib/*.js',
      'src/**/lib/*.js',
      'src/**/lib/**/*.js',
      'src/**/libs/*.js',
      'src/**/libs/**/*.js',
      'src/**/*.css',
      'src/*.css'
    ]
  },
  dist: {
    dev: 'dist/dev/',
    prod: 'dist/prod/',
    installers: 'dist/prod/installers'
  }
};
```

> In build mode, you will generate QAR installers for distributing easily your extensions.


# Examples

- https://github.com/vyakymenko/qlikview-extensions-starter/tree/master/source/Document/DocExtension - Document Extension Example.
- https://github.com/vyakymenko/qlikview-extensions-starter/tree/master/source/Objects/TestExtension - Object Extension Example.

# Directory Structure

```
.
├── LICENSE
├── README.md
├── appveyor.yml
├── gulpfile.ts
├── package-lock.json
├── package.json
├── src
│   ├── API
│   │   └── Lambda.ts
│   ├── Document
│   │   └── DocExtension
│   │       ├── Definition.xml
│   │       └── Script.ts
│   └── Objects
│       └── TestExtension
│           ├── Definition.xml
│           ├── Script.ts
│           ├── extensions.scss
│           ├── icon.png
│           ├── libs
│           │   ├── Definition.xml
│           │   └── Qvet.min.js
│           └── services
│               └── Loader.ts
├── tools
│   ├── config.ts
│   ├── manual_types
│   │   └── qlikview.d.ts
│   ├── tasks
│   │   ├── assets.copy.dev.ts
│   │   ├── assets.copy.prod.ts
│   │   ├── clean.dev.ts
│   │   ├── clean.prod.ts
│   │   ├── installers.prod.ts
│   │   ├── noop.ts
│   │   ├── scss.dev.ts
│   │   ├── scss.prod.ts
│   │   ├── ts.build.dev.ts
│   │   ├── ts.build.prod.ts
│   │   ├── tslint.ts
│   │   └── watch.dev.ts
│   ├── tasks.json
│   └── utils
│       ├── code_change_tools.ts
│       ├── task.ts
│       └── tasks_tools.ts
├── tsconfig.json
└── tslint.json
```

# License

MIT

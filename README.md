#  QlikView Extensions Developer Starter Pack ES6

### Version
1.0.2

### Tech

QlikView Extensions Developer Starter Pack ES6 uses a number of open source projects to work properly:

* [node.js] - evented I/O for the backend
* [Gulp] - the streaming build system
* [Browserify] - awesome bundler

### Installation
Clone the repo and write this command in your command line:

```sh
$ npm i
```

### Hot to use

Before development i recomend you to look for configuration file:

```javascript
	// Configuration
	/**
     * Project Configuration
     *
     * {Configuration file for tasks}
     */
    module.exports = {
    	src: {
    		main: 'source/',
    		extensions: [
    		/**
    		 * Document Extensions
    		 */
    			'Document/TestExtension',
    		/**
    		 * Object Extensions
    		 */
    			'Objects/TestExtension'
    		],
    		jswatch: [
    			'source/**/*.js',
    			'source/*.js'
    		],
    		css: [
    			'source/**/*.css',
    			'source/*.css'
    		],
    		constfiles: [
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
    		main: 'dist/'
    	},
    	installers: {
    		main: 'dist-installers/'
    	}
    };
```

Development - Watch Mode

```sh
$ gulp
```

Build Mode

```sh
$ gulp build
```

> In build mode, you will generate QAR installers for distributing easily your extensions.

## Examples

### Document Extension

```javascript
    // source/Document/TestExtension/Script.js
    import {Log} from '../../_api/Lambda';
    
    /**
     * Init extension.
     */
    let loader = () => {
    	
    	Log(`
    		We have our first document Extension!
    	`);
    };
    
    /**
     * Extension Loader.
     */
    Qva.AddDocumentExtension('TestExtension', loader);
```

```javascript
    // source/_api/Lambda.js
    /**
     * Log {function}
     *
     * @param message - alert message.
     */
    export let Log = (message) => {
    	alert(message);
    };
```

### Object Extension

```javascript
   // source/Objects/TestExtension/Script.js
   /**
    * Extension Path
    * @type {string}
    */
   const extPath = '/QvAjaxZfc/QvsViewClient.aspx?public=only&name=Extensions/TestExtension';
   
   /**
    * Import Something
    */
   import Loader from './services/Loader';
   
   let addExt = () => {
   	Qva.AddExtension('TestExtension', Loader);
   };
   
   Qva.LoadScript(extPath+'/libs/Qvet.min.js', addExt);
```

```javascript
    // source/Objects/TestExtension/services/Loader.js
    /**
     * Import Something
     */
    import {Log} from '../../../_api/Lambda';
    
    /**
     * Extension loader.
     */
    export default function () {
    
    	let $container = $(this.Element);
    
    	Log(`
    		We Created Object Extension.
    		Let's try to make some small functionality!
    	`);
    
    	let buttonNames = {
    		first: "Qvet Version",
    		second: "Make Some Alert",
    		third: "Add Bookmark"
    	};
    
    	$container.append(`
    		<div>
    			<a onclick="Qvet.getVersion()">${buttonNames.first}</a>
    		</div>
    		<div>
    			<a onclick="alert('Some test alert!')">${buttonNames.second}</a>
    		</div>
    		<div>
    			<a onclick="Qvet.native.bookmarks.$add()">${buttonNames.third}</a>
    		</div>
    	`);
    };
```

### Todos
 - Add SASS.

### Enjoy!

License
----

MIT


   [node.js]: <https://nodejs.org>
   [Gulp]: <http://gulpjs.com>
   [Browserify]: <http://browserify.org/>

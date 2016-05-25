/**
 * Project Configuration
 *
 * {Configuration file for tasks}
 */
module.exports = {
	source: {
		main: 'source/',
		js: [
		/**
		 * Document Extensions
		 */
			'Document/TestExtension/Script.js',
		/**
		 * Object Extensions
		 */
			'Objects/TestExtension/Script.js'
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
	}
};
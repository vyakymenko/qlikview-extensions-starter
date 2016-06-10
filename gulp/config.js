/**
 * Project Configuration
 *
 * @path: gulp/config.js
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

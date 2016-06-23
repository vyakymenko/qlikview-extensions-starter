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
			 * Document Extensions.
			 */
			'Document/TestExtension',
			/**
			 * Object Extensions.
			 */
			'Objects/TestExtension'
		],
		js: [
			'source/**/*.js',
			'source/*.js'
		],
		sass: [
			'source/**/*.scss',
			'source/*.scss'
		],
		assets: [
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
			'source/**/libs/**/*.js',
			'source/**/*.css',
			'source/*.css'
		]
	},
	dist: {
		dev: 'dist/dev/',
		prod: 'dist/prod/',
		installers: 'dist/prod/installers'
	}
};

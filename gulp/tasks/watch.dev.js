/**
 * Watcher task.
 * @note Watching for changes in folders, files in folders depend on @config.
 */
let gulp = require('gulp'),
	conf = require('../config');

module.exports = () => {

	gulp.watch(conf.src.js,[
		'js.build.dev'
	]);

	gulp.watch(conf.src.assets, [
		'assets.copy.dev'
	]);

	gulp.watch(conf.src.sass, [
		'sass.dev'
	]);
};

/**
 * Watcher task.
 *
 * @note Watching for changes in folders, files in folders depend on @config.
 */
let gulp = require('gulp'),
	conf = require('../config');

module.exports = () => {

	gulp.watch(conf.src.jswatch,[
		'js-dev'
	]);

	gulp.watch(conf.src.constfiles, [
		'const'
	]);

	gulp.watch(conf.src.css, [
		'css-minify'
	]);
};
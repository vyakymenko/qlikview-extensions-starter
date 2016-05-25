/**
 * Task Loader
 *
 * @gulp - Main project builder.
 *
 * {Call each of task and initialize it.}
 */
var gulp = require('gulp');

module.exports = function(tasks) {
	tasks.forEach(function(name) {
		gulp.task(name, require('./tasks/' + name));
	});

	return gulp;
};
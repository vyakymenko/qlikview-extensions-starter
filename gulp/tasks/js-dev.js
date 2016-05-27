/**
 * ES6 JavaScript Compiling Task {Development}
 */
let gulp = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	gutil = require('gulp-util'),
	conf = require('../config'),
	es = require('event-stream');

module.exports = () => {

	let tasks = conf.src.extensions.map(entry => {
		return browserify({
			debug: true,
			entries: [conf.src.main+entry+'/Script.js'],
			extensions: ['.js', '.json', '.es6']
		})
			.transform(babelify)
			.bundle()
			.on('error', gutil.log)
			.pipe(source(conf.dist.main+entry+'/Script.js'))
			.pipe(gulp.dest(''));
	});

	return es.merge.apply(null, tasks);
};

/**
 * ES6 JavaScript Compiling Task {Production}
 */
let gulp = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	gutil = require('gulp-util'),
	uglify = require('gulp-uglify'),
	streamify = require('gulp-streamify'),
	conf = require('../config'),
	es = require('event-stream');

module.exports = () => {

	let tasks = conf.src.extensions.map(entry => {
		return browserify({
			entries: [conf.src.main+entry+'/Script.js'],
			extensions: ['.js', '.json', '.es6']
		})
			.transform(babelify)
			.bundle()
			.on('error', gutil.log)
			.pipe(source(conf.dist.main+entry+'/Script.js'))
			.pipe(streamify(uglify({
				preserveComments: "license"
			})))
			.pipe(gulp.dest(''));
	});

	return es.merge.apply(null, tasks);
};

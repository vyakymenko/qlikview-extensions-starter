/**
 * ES6 JavaScript Compiling {Development}
 * @task js.build.dev
 */
const gulp = require('gulp'),
      browserify = require('browserify'),
      babelify = require('babelify'),
      source = require('vinyl-source-stream'),
      util = require('gulp-util'),
      es = require('event-stream'),
      conf = require('../config');

module.exports = () => {

  const tasks = conf.src.extensions.map(entry => {
		return browserify({
			debug: true,
			entries: [conf.src.main+entry+'/Script.js'],
			extensions: ['.js', '.json', '.es6']
		})
			.transform(babelify)
			.bundle()
			.on('error', util.log)
			.pipe(source(conf.dist.dev+entry+'/Script.js'))
			.pipe(gulp.dest(''));
	});

	return es.merge.apply(null, tasks);
};

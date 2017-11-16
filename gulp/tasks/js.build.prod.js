/**
 * ES6 JavaScript Compiling {Production}
 * @task js.build.prod
 */
const gulp = require('gulp'),
      browserify = require('browserify'),
      babelify = require('babelify'),
      source = require('vinyl-source-stream'),
      util = require('gulp-util'),
      uglify = require('gulp-uglify'),
      streamify = require('gulp-streamify'),
      es = require('event-stream'),
      conf = require('../config');

module.exports = () => {

  const tasks = conf.src.extensions.map(entry => {
		return browserify({
			entries: [conf.src.main+entry+'/Script.js'],
			extensions: ['.js', '.json', '.es6']
		})
			.transform(babelify)
			.bundle()
			.on('error', util.log)
			.pipe(source(conf.dist.prod+entry+'/Script.js'))
			.pipe(streamify(uglify({
				preserveComments: "license"
			})))
			.pipe(gulp.dest(''));
	});

	return es.merge.apply(null, tasks);
};

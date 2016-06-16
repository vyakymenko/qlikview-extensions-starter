/**
 * SASS Compiling Task {Development}
 */
let gulp = require('gulp'),
	conf = require('../config'),
	sourcemaps = require('gulp-sourcemaps'),
	sass = require('gulp-sass');

module.exports = () => {
	conf.src.extensions.map(entry => {
		gulp.src(conf.src.main+entry+'/*.scss')
			.pipe(sourcemaps.init())
			.pipe(sass())
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(conf.dist.main));
	});
};

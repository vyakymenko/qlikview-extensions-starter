/**
 * SASS Compiling Task {Production}
 */
let gulp = require('gulp'),
	conf = require('../config'),
	sass = require('gulp-sass');

module.exports = () => {
	conf.src.extensions.map(entry => {
		gulp.src(conf.src.main+entry+'/*.scss')
			.pipe(sass())
			.pipe(gulp.dest(conf.dist.main));
	});
};

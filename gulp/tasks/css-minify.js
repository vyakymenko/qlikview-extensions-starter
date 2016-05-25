/**
 * Minify CSS Files
 */
let gulp = require('gulp'),
	conf = require('../config'),
	cssmin = require('gulp-cssmin');

module.exports = () => {
	gulp.src(conf.src.css)
		.pipe(cssmin())
		.pipe(gulp.dest(conf.dist.main));
};
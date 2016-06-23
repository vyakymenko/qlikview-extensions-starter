/**
 * SASS compiling {Production}
 * @task sass.prod
 */
let gulp = require('gulp'),
	sass = require('gulp-sass'),
	cssmin = require('gulp-cssmin'),
	conf = require('../config');

module.exports = () => {
	gulp.src(conf.src.sass)
		.pipe(sass())
		.pipe(cssmin())
		.pipe(gulp.dest(conf.dist.prod));
};

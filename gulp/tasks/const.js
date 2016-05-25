/**
 * Const files copy.
 */
let gulp = require('gulp'),
	conf = require('../config');

module.exports = () => {
	gulp.src(conf.src.constfiles)
		.pipe(gulp.dest(conf.dist.main));
};
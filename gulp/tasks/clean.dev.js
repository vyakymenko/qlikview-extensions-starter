/**
 * Clean {Development}.
 */
let gulp = require('gulp'),
	rimraf = require('rimraf'),
	conf = require('../config');

module.exports = () => {
	gulp.src([
		conf.dist.main,
		conf.installers.main
	])
};

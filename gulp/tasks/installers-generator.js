/**
 * QAR Installers Generator.
 */
let gulp = require('gulp'),
	conf = require('../config'),
	zip = require('gulp-zip'),
	rename = require('gulp-rename');

module.exports = () => {
	conf.src.extensions.map(entry => {
		gulp.src(conf.dist.main+entry)
			.pipe(zip(entry))
			.pipe(rename(entry+'.qar'))
			.pipe(gulp.dest(conf.installers.main));
	});
};

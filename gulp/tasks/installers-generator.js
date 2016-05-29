/**
 * QAR Installers Generator.
 */
let gulp = require('gulp'),
	conf = require('../config'),
	qar = require('gulp-qar');

module.exports = () => {
	conf.src.extensions.map(entry => {
		gulp.src(conf.dist.main+entry)
			.pipe(qar(entry))
			.pipe(gulp.dest(conf.installers.main));
	});
};

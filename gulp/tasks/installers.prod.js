/**
 * QAR installers generator {Production}
 * @task installers.prod
 */
const gulp = require('gulp'),
      qar = require('gulp-qar'),
      conf = require('../config');

module.exports = () => {
	conf.src.extensions.map(entry => {
		gulp.src(conf.dist.prod+entry)
			.pipe(qar(entry))
			.pipe(gulp.dest(conf.dist.installers));
	});
};

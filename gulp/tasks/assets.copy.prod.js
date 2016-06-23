/**
 * Copy assets file's {Production}
 * @task assets.copy.prod
 */
let gulp = require('gulp'),
	conf = require('../config');

module.exports = () => {
	gulp.src(conf.src.assets)
		.pipe(gulp.dest(conf.dist.prod));
};

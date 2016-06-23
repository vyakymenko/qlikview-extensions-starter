/**
 * Copy assets file's {Development}
 * @task assets.copy.dev
 */
let gulp = require('gulp'),
	conf = require('../config');

module.exports = () => {
	gulp.src(conf.src.assets)
		.pipe(gulp.dest(conf.dist.dev));
};

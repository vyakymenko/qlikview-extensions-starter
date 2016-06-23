let gulp = require('./gulp')([
	'clean.dev',
	'assets.copy.dev',
	'js.build.dev',
	'sass.dev',
	'watch.dev',
	'clean.prod',
	'assets.copy.prod',
	'js.build.prod',
	'sass.prod',
	'installers.prod'
]);

let runSequence = require('run-sequence');

//----------
// Development.
gulp.task('dev', () => {
	runSequence(
		// 'clean.dev',
		'assets.copy.dev',
		'js.build.dev',
		'sass.dev',
		'watch.dev')
});

//----------
// Production build.
gulp.task('build', () => {
	runSequence(
		// 'clean.prod',
		'assets.copy.prod',
		'js.build.prod',
		'sass.prod',
		'installers.prod')
});

//----------
// Default development.
gulp.task('default', ['dev']);

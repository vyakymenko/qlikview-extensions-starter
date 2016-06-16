let gulp = require('./gulp')([
	'clean.prod',
	'clean.dev',
	'js-dev',
	'js-prod',
	'css-minify',
	'const',
	'installers-generator',
	'watch'
]);

let sequence = require('run-sequence');

//----------
// Production build.
gulp.task('build', () => {
	sequence(
		'clean.prod',
		'const',
		'js-prod',
		'css-minify',
		'installers-generator')
});

//----------
// Development.
gulp.task('dev', () => {
	sequence(
		'clean.dev',
		'const',
		'js-dev',
		'css-minify',
		'watch')
});

//----------
// Default development.
gulp.task('default', ['dev']);

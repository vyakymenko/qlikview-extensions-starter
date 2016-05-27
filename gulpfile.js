let gulp = require('./gulp')([
	'js-dev',
	'js-prod',
	'css-minify',
	'const',
	'installers-generator',
	'watch'
]);

let sequence = require('run-sequence');

gulp.task('inst', ['installer-generator']);

gulp.task('build', () => {
	sequence(
		'const',
		'js-prod',
		'css-minify',
		'installers-generator')
});
gulp.task('dev', ['const', 'js-dev', 'css-minify']);

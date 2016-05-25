let gulp = require('./gulp')([
	'js-dev',
	'js-prod',
	'css-minify',
	'const',
	'watch'
]);

gulp.task('build',['const', 'js-prod', 'css-minify']);
gulp.task('dev', ['const', 'js-dev', 'css-minify']);

gulp.task('default', ['dev', 'watch']);
/**
 * QAR installers generator {Production}
 * @task installers.prod
 */
import * as gulp from 'gulp';
import { Config } from '../config';
import { lstatSync, readdirSync } from 'fs';
import { join } from 'path';

const qar = require('gulp-qar');

export = () => {
  const isDirectory = (source: any) => lstatSync(source).isDirectory();
  const getDirectories = (source: any) =>
    readdirSync(source).map(name => join(source, name)).filter(isDirectory);

  const documents = getDirectories(Config.src.extensions.document);
  const objects = getDirectories(Config.src.extensions.objects);

  const directories = [
    ...documents,
    ...objects
  ].map((entry: string) => {
    return entry.replace(Config.src.main, Config.dist.prod);
  });

  return directories.map((entry: string) => {
    const split = entry.split('/');

		gulp.src(entry)
			.pipe(qar(split[split.length - 1]))
			.pipe(gulp.dest(Config.dist.installers));
	});
};

/**
 * TypeScript Compiling {Development}
 * @task js.build.dev
 */
const { src, dest } = require('gulp');
const mergeStream = require('merge-stream');
import * as gulpEsbuild from 'gulp-esbuild';
import { lstatSync, readdirSync } from 'fs';
import { join } from 'path';

import { Config } from '../config';

export = () => {

  const isDirectory = (source: any) => lstatSync(source).isDirectory();
  const getDirectories = (source: any) =>
    readdirSync(source).map(name => join(source, name)).filter(isDirectory);

  const documents = getDirectories(Config.src.extensions.document);
  const objects = getDirectories(Config.src.extensions.objects);

  const directories = [
    ...documents,
    ...objects
  ];

  const tasks = directories
    .map(entry => {

      const path = entry.replace(/\\/g, '/');

      return src(`${path}/Script.ts`)
        .pipe(gulpEsbuild({
          outfile: `Script.js`,
          format: 'iife',
          bundle: true
        }))
        .pipe(dest(`${Config.dist.dev}${path.split('src/')[1]}`));
    });

  return mergeStream(tasks);
};

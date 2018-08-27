/**
 * TypeScript Compiling {Development}
 * @task js.build.dev
 */
import { lstatSync, readdirSync } from 'fs';
import { join } from 'path';
import * as rollup from 'rollup';
import * as es from 'event-stream';
import { Config } from '../config';

const typescript = require('rollup-plugin-typescript');
const tsconfig = require('../../tsconfig.json');

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

      return rollup.rollup({
        input: `${path}/Script.ts`,
        plugins: [
          typescript({
            typescript: require('typescript'),
            tsconfig: tsconfig
          })
        ]
      })
        .then((bundle: any) => {
          return bundle.write({
            file: `${Config.dist.dev}${path.split('src/')[1]}/Script.js`,
            format: 'iife'
          });
        })
    });

  return es.merge.apply(tasks);
};

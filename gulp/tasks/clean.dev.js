/**
 * Clean {Development}.
 * @task clean.dev
 */
const rimraf = require('rimraf'),
      util = require('gulp-util'),
      conf = require('../config');

module.exports = () => {
	return cb => {
		const promise = new Promise(resolve => {
			rimraf(conf.dist.dev, e => {
				if (e) {
					util.log('Clean task failed with', e);
				}
				resolve();
			});
		});
		Promise.all([promise]).then(() => cb());
	}
};

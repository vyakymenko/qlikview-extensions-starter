/**
 * Clean {Production}.
 * @task clean.prod
 */
let rimraf = require('rimraf'),
	util = require('gulp-util'),
	conf = require('../config');

module.exports = () => {
	return cb => {
		let promise = new Promise(resolve => {
			rimraf(conf.dist.prod, e => {
				if (e) {
					util.log('Clean task failed with', e);
				}
				resolve();
			});
		});
		Promise.all([promise]).then(() => cb());
	}
};

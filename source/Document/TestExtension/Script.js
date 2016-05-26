import {Log} from '../../_api/Lambda';

/**
 * Init extension.
 */
let loader = () => {
	
	Log(`
		We have our first document Extension!
	`);
};

/**
 * Extension Loader.
 */
Qva.AddDocumentExtension('TestExtension', loader);
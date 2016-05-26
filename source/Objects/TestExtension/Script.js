/**
 * Extension Path
 * @type {string}
 */
const extPath = '/QvAjaxZfc/QvsViewClient.aspx?public=only&name=Extensions/TestExtension';

/**
 * Import Something
 */
import Loader from './services/Loader';

let addExt = () => {
	Qva.AddExtension('TestExtension', Loader);
};

Qva.LoadScript(extPath+'/libs/Qvet.min.js', addExt);
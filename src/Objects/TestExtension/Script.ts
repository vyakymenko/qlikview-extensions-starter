/**
 * Extension Path
 * @type {string}
 */
const extPath = '/QvAjaxZfc/QvsViewClient.aspx?public=only&name=Extensions/TestExtension';
let cssLoadOnce = true; // hack for load css file only once, `setOnUpdateComplete` call back is evil ^_^

/**
 * Import Something
 */
import Loader from './services/Loader';

const addExt = () => {
  Qva.AddExtension('TestExtension', function () {

    if (cssLoadOnce) {
      Qva.LoadCSS(extPath + '/extensions.css');
      cssLoadOnce = false;
    }

    Loader(this);
  });
};

Qva.LoadScript(extPath + '/libs/Qvet.min.js', addExt);

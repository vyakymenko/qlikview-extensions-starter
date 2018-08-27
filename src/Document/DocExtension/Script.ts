import { Log } from '../../API/Lambda';

/**
 * Init extension.
 */
const loader = () => {
  Log(`We have our first document Extension!`);
};

/**
 * Extension Loader.
 */
Qva.AddDocumentExtension('DocExtension', loader);

/**
 * Import Something
 */
import {Log} from '../../../API/Lambda';

/**
 * Extension loader.
 */
export default function () {

	let $container = $(this.Element);

	Log(`
		We Created Object Extension.
		Let's try to make some small functionality!
	`);

	let buttonNames = {
		first: "Qvet Version",
		second: "Make Some Alert",
		third: "Add Bookmark"
	};

	$container.append(`
		<div>
			<a onclick="Qvet.getVersion()">${buttonNames.first}</a>
		</div>
		<div>
			<a onclick="alert('Some test alert!')">${buttonNames.second}</a>
		</div>
		<div>
			<a onclick="Qvet.native.bookmarks.$add()">${buttonNames.third}</a>
		</div>
	`);
};

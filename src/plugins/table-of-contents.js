/**
 * https://gomakethings.com/adding-options-and-settings-to-a-script/
 */
var tableOfContents = function (options) {
	// Default settings
	var defaults = {
		selector: 'h2',
		target: '#toc',
		listType: 'ul',
		heading: 'Table of Contents',
		headingLevel: 'h2'
	};

	// Merged settings
	var settings = Object.assign({}, defaults, options);

	// Variables
	var headings = document.querySelectorAll(settings.selector);
	var target = document.querySelector(settings.target);

	// Make sure there's a target and headings
	if (!target || headings.length < 1) return;

	// Create the table of contents items
	var tocItems = Array.prototype.map.call(headings, function (heading) {
		return '<li>' + heading.textContent + '</li>';
	});

	// Add the table of contents to the DOM
	target.innerHTML =
		'<' + settings.headingLevel + '>' + settings.heading + '</' + settings.headingLevel + '>' +
		'<' + settings.listType + '>' +
			tocItems.join('');
		'</' + settings.listType + '>';
};

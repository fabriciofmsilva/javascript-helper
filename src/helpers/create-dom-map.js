/**
 * Create a DOM Tree Map for an element
 * @param  {Node}    element The element to map
 * @param  {Boolean} isSVG   If true, node is within an SVG
 * @return {Array}           A DOM tree map
 */
var createDOMMap = function (element, isSVG) {
	return Array.prototype.map.call(element.childNodes, (function (node) {
		var details = {
			content: node.childNodes && node.childNodes.length > 0 ? null : node.textContent,
			atts: node.nodeType !== 1 ? [] : getAttributes(node.attributes),
			type: node.nodeType === 3 ? 'text' : (node.nodeType === 8 ? 'comment' : node.tagName.toLowerCase()),
			node: node
		};
		details.isSVG = isSVG || details.type === 'svg';
		details.children = createDOMMap(node, details.isSVG);
		return details;
	}));
};

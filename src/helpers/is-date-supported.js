/**
 * Test if the browser supports input[type="date"]
 * @return {Boolean} Returns true if it's supported
 */
var isDateSupported = function () {
	var input = document.createElement('input');
	var value = 'a';
	input.setAttribute('type', 'date');
	input.setAttribute('value', value);
	return (input.value !== value);
};

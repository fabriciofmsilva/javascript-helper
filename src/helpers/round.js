/*!
 * Round to the nearest whole number
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Number|String} num       The numer to round
 * @param  {Number}        precision The whole number to round to (ex. 10, 100, 1000)
 * @return {String}                  The rounded, delimited number
 */
var round = function (num, precision) {
	num = parseFloat(num);
	if (!precision) return num.toLocaleString();
	return (Math.round(num / precision) * precision).toLocaleString();
};

/*!
 * Round down to the nearest whole number
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Number|String} num       The numer to round
 * @param  {Number}        precision The whole number to round to (ex. 10, 100, 1000)
 * @return {String}                  The rounded, delimited number
 */
var roundDown = function (num, precision) {
	num = parseFloat(num);
	if (!precision) return num.toLocaleString();
	return (Math.floor(num / precision) * precision).toLocaleString();
};

/*!
 * Round up to the nearest whole number
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Number|String} num       The numer to round
 * @param  {Number}        precision The whole number to round to (ex. 10, 100, 1000)
 * @return {String}                  The rounded, delimited number
 */
var roundUp = function (num, precision) {
	num = parseFloat(num);
	if (!precision) return num.toLocaleString();
	return (Math.ceil(num / precision) * precision).toLocaleString();
};


var roundA = function (num, precision, method) {

	// Convert string numbers to a float
	num = parseFloat(num);

	// If there's no rounding precision, return the number
	if (!precision) return num.toLocaleString();

	// Possible methods and their values
	var methods = {
		auto: 'round',
		up: 'ceil',
		down: 'floor'
	};

	// Get the method function
	var fn = methods[method];
	if (!fn) {
		fn = 'round';
	}

	// Do math!
	return (Math[fn](num / precision) * precision).toLocaleString();

};

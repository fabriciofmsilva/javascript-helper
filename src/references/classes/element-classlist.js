var elem = document.querySelector('#sandwich');

// Add a class
elem.classList.add('turkey');

// Remove a class
elem.classList.remove('tuna');

// Toggle a class
// (Add the class if it's not already on the element, remove it if it is.)
elem.classList.toggle('tomato');

// Check if an element has a specific class
if (elem.classList.contains('mayo')) {
	console.log('add mayo!');
}

var btn = document.querySelector('#click-me');

btn.addEventListener('click', function (event) {
	console.log(event); // The event details
	console.log(event.target); // The clicked element
}, false);

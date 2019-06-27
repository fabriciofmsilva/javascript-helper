// Create a new event
var event = new CustomEvent('myCustomEvent', {
	bubbles: true,
	cancelable: true,
	detail: {
		someDetail: 'the detail value'
	}
});

// Dispatch the event
var elem = document.querySelector('#the-element-to-emit-on');
elem.dispatchEvent(event);

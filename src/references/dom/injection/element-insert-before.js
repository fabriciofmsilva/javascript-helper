// Create a new element
var newNode = document.createElement('div');

// Get the reference node
var referenceNode = document.getElementById('some-element');

// Insert the new node before the reference node
referenceNode.parentNode.insertBefore(newNode, referenceNode);

// Create a new element
var newNode = document.createElement('div');

// Get the reference node
var referenceNode = document.getElementById('#some-element');

// Insert the new node after the reference node
referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);

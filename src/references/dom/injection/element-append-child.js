// Create a new element
var newNode = document.createElement('div');

// Get the reference node
var referenceNode = document.querySelector('#some-element');

// Insert the new node after the last element in the parent node
referenceNode.appendChild(newNode);

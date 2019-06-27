// Create a new element
var newNode = document.createElement('li');
newNode.textContent = 'I am new here.';

// Get the parent node
var referenceNode = document.querySelector('#some-element');

// Insert the new node before the first element in the reference node
referenceNode.prepend(newNode);

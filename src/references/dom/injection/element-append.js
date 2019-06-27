// Create a new element
var newNode = document.createElement('li');
newNode.textContent = 'I am new here.';

// Get the reference node
var referenceNode = document.querySelector('#some-element');

// Insert the new node after the last element in the reference node
referenceNode.append(newNode);

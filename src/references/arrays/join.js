var strings = [
	'I love Cape Cod potato chips.',
	'What about you?'
];

var concat = strings.join();
var concatWithSpace = strings.join(' ');
var concatWithSmiley = strings.join(' =) ');

// logs "I love Cape Cod potato chips.,What about you?"
console.log(concat);

// logs "I love Cape Cod potato chips. What about you?"
console.log(concatWithSpace);

// logs "I love Cape Cod potato chips. =) What about you?"
console.log(concatWithSmiley);

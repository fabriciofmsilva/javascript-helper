/**
 * Add all of the numbers in an array
 */

var total = [1, 2, 3].reduce(function (sum, current) {
	return sum + current;
}, 0);

// logs 6
console.log(total);


/**
 * Create a new array with only the names of wizards in Huffepuff
 */

var wizards = [
	{
		name: 'Harry Potter',
		house: 'Gryfindor'
	},
	{
		name: 'Cedric Diggory',
		house: 'Hufflepuff'
	},
	{
		name: 'Tonks',
		house: 'Hufflepuff'
	},
	{
		name: 'Ronald Weasley',
		house: 'Gryfindor'
	},
	{
		name: 'Hermione Granger',
		house: 'Gryfindor'
	}
];

// This combines what you would otherwise do with map() and filter() into one step
var hufflepuff = wizards.reduce(function (newArr, wizard) {
	if (wizard.house === 'Hufflepuff') {
		newArr.push(wizard.name);
	}
	return newArr;
}, []);

// logs ["Cedric Diggory", "Tonks"]
console.log(hufflepuff);

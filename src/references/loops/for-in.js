var lunch = {
	sandwich: 'ham',
	snack: 'chips',
	drink: 'soda',
	desert: 'cookie',
	guests: 3,
	alcohol: false,
};

for (var key in lunch) {
	if (lunch.hasOwnProperty(key)) {
		console.log(key); // key
		console.log(lunch[key]); // value
	}
}

// returns sandwich, ham, snack, chips, drink, soda, desert, cookie, guests, 3, alcohol, false

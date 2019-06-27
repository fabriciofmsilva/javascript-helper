// A lunch order
var lunch = {
	sandwich: 'turkey',
	chips: 'Cape Cod',
	drink: 'Pepsi'
};

// Save data to local storage
localStorage.setItem('lunchOrder', JSON.stringify(lunch));

// Drink options
var drinks = ['Pepsi', 'water', 'lemonade'];

// Save data to local storage
localStorage.setItem('drinkOptions', JSON.stringify(drinks));

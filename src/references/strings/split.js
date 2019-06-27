var shoppingList = 'Soda, turkey sandwiches, potato chips, chocolate chip cookies';
var menu = shoppingList.split(', ');
var limitedMenu = shoppingList.split(', ', 2);

// logs ["Soda", "turkey sandwiches", "potato chips", "chocolate chip cookies"]
console.log(menu);

// logs ["Soda", "turkey sandwiches"]
console.log(limitedMenu);

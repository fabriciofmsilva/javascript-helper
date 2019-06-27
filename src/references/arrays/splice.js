var sandwiches = ['turkey', 'tuna', 'ham', 'pb&j'];

// Remove "ham" from the array
// It has an index of 2, and we only want to remove 1 item
sandwiches.splice(2, 1);

// Add "italian" between "tuna" and and "ham"
// Our target index is 2, we want to remove 0 items, and add "italian"
sandwiches.splice(2, 0, 'italian');

// Replace "tuna" with "chicken salad"
// It has an index of 1, we want to remove 1 item, and add "chicken salad"
sandwiches.splice(1, 1, 'chicken salad');

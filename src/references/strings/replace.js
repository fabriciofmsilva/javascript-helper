var text = 'I love Cape Cod potato chips!';

// returns "I love Lays potato chips!"
text.replace('Cape Cod', 'Lays');

var chips = 'Cape Cod potato chips are my favorite brand of chips.';

// Only replaces the first instance of the word "chips"
chips.replace('chips', 'deep fried potato slices');

// Replaces all instances of the word "chips"
chips.replace(new RegExp('chips', 'g'), 'deep fried potato slices');

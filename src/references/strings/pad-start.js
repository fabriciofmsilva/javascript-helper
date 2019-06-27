// Add a leading zero for hours below 10
var hour3 = '3';
var hour12 = '12';

// returns "03"
hour3.padStart(2, '0');

// returns "12"
hour12.padStart(2, '0');

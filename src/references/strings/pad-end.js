// Add a leading zero for hours below 10
var minutes0 = '0';
var minutes12 = '12';

// returns "00"
minutes0.padEnd(2, '0');

// returns "12"
minutes12.padEnd(2, '0');

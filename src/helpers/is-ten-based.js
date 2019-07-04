var isTenBased = function (num) {
  var str = num.toString();
  var first = str.slice(0, 1);
  var rest = str.slice(1, str.length);
  return first === '1' && parseFloat(rest) === 0;
}

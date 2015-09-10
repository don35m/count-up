var countUp = function(multiple, limit) {
  var multiples = [];
  for (var i = multiple; i <= limit; i += multiple) {
    multiples.push(i);
  }
  return multiples;
};

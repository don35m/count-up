var countUp = function(multiple, limit) {
  var multiples = [];
  for (var i = multiple; i <= limit; i += multiple) {
    multiples.push(i);
  }
  return multiples;
};

$(document).ready(function() {

  $("form#countUp").submit(function(event) {

    var multiple = parseInt($("input#multiple").val());
    var limit = parseInt($("input#limit").val());

    var multiples = countUp(multiple, limit);

    $("#multiples").text(multiples.join(", "));

    $("#multiples").show();
    event.preventDefault();
  });
});

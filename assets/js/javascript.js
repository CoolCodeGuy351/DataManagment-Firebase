/* JS */

$( document ).ready(function() {


$( "#submit-button" ).click(function(event) {

  event.preventDefault();

  var name = $('#employee-name-input').val().trim();
  var role = $('#role-input').val().trim();
  var start = $('#start-date-input').val().trim();
  var rate = $('#monthly-rate-input').val().trim();

  var newP = $('<p>');

  newP.append(name)
  newP.append(role)
  newP.append(start)
  newP.append(rate)

});






























});


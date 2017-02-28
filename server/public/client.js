$(document).ready(function () {
console.log('jQuery sourced');
// var num0 = '';
// var num1 = '';
// var operator = '';
// var captureNum1 = false;

// $('numArray').empty();  // NOTE: Empty the object

// NOTE: set values to empty
$('#clear').on('click', function() {
  $('#num1').val('');
  $('#num2').val('');
  $('#calculation').val('');
  console.log('Cleared!');
});


// NOTE: on click
$('#result').on('click', function(){
  console.log('Result Button clicked');
  var $num1 = $('#num1').val();
  var $num2 = $('#num2').val();
  var ops = $('#operator').val();
  var calcData = {$num1, $num2, ops};
  // var objectToSend = {
  //   num1: $num1,
  //   num2: $num2,
  //   operator: ops
  // }
  console.log(calcData);
  // function ajaxPost() {
    $.ajax({
      type: 'POST', // NOTE: These two lines are retrieving AND posting data
      url: '/',
      data: calcData,
      // data: objectToSend, // NOTE: data becomes req.body on the server side
      success: function(response) {
        console.log('Successful response is: ', response.answer);
        $('#calculation').val(response.answer)
      }
    });// NOTE: FOR: $.ajax({
    // }
  });// NOTE: FOR: $('#result').on('click', function(num1 , num2 ){

      // $('#calculation').append('numbers-here');
////////////////////////////////////////////////// NOTE: Failed Code ////////////////////////////////////////////////
// console.log('num1 = ', $num1);
// console.log('num2 = ', $num2);
// var $result = $num1 * $num2; // Error:
// console.log('$result = ', $result);
// console.log('num1 * num2 = ', $num1 * $num2);
// numArray.num1 = $('#num1').val();
// numArray.num2 = $('#num2').val();
////////////////////////////////////////////////// NOTE: Into Server ////////////////////////////////////////////////
////////////////////////////////////////////////// NOTE: Into Server ////////////////////////////////////////////////
////////////////////////////////////////////////// NOTE: Into Server ////////////////////////////////////////////////

// console.log(calculation());
}); // NOTE: FOR: $(document).ready(function () {
console.log('Javascript sourced');

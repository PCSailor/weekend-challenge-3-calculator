// Client code might look like this:
// $.ajax({
//     type: "POST",
//     url: "/division",
//     success: function(data){
//        //something here
//     }
// });
$(document).ready(function () {
console.log('jQuery is sourced');

$('#multiply').on('click', function(){
  console.log('multiply has been clicked');
});

////////////////////////////////////////////////// NOTE: Into Server ////////////////////////////////////////////////
////////////////////////////////////////////////// NOTE: Into Server ////////////////////////////////////////////////
////////////////////////////////////////////////// NOTE: Into Server ////////////////////////////////////////////////
// On click I want to run a function that takes the two entered numbers and the PEMDAS within the function, console logged, and then passes these values over to the server
  // var numArray = {$num1, $num2};
  // var $num1 = $('#num1').val();
  // var $num2 = $('#num2').val();

// $.ajax({
//   type: 'GET',
//   url: '/',
//   success: function(response){
//     console.log('Ajax-GET Response: ', response);
//     // $('numArray').empty();  // NOTE: Empty the object
//   }
// })

$('#result').on('click', function(num1 , num2 ){
  console.log('Result Button clicked');
  var $num1 = $('#num1').val();  // NOTE: moved to global
  var $num2 = $('#num2').val();  // NOTE: moved to global
  var numArray = {$num1, $num2};  // NOTE: moved to global
  console.log(numArray);
  // function ajaxPost() {
    $.ajax({
      type: 'POST', // NOTE: These two lines are retrieving AND posting data
      url: '/',
      data: numArray, // NOTE: data becomes req.body on the server side
      success: function(response) {
        console.log('Successful response from server back here to client.  Result is: ', response);
        console.log(response);
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

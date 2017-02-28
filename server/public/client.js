$(document).ready(function () {
  console.log('jQuery sourced');
  // NOTE: set values to empty
  $('#clear').on('click', function() {
    $('#num1').val('');
    $('#num2').val('');
    $('#calculation').val('');
    console.log('Cleared!');
  });
  // NOTE: on click
  $('#result').on('click', function(){
    var $num1 = $('#num1').val();
    var $num2 = $('#num2').val();
    var ops = $('#operator').val();
    var calcData = {$num1, $num2, ops};
    console.log(calcData);
    // NOTE: FOR: function ajaxPost() {
    $.ajax({
      type: 'POST', // NOTE: These two lines are retrieving AND posting data
      url: '/',
      data: calcData, // NOTE: data becomes req.body on the server side
      success: function(response) {
        console.log('Successful response is: ', response.answer);
        $('#calculation').val(response.answer)
      } // NOTE: FOR: success
    }); // NOTE: FOR: $.ajax({
    }); // NOTE: FOR: $('#result').on('click', function(num1 , num2 ){
    }); // NOTE: FOR: $(document).ready(function () {
      console.log('Javascript sourced');

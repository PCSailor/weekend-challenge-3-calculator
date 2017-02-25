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

$('#result').on('click', function(num1 , num2 ){
  var num1 = $('#num1').val()
  var num2 = $('#num2').val()
  console.log(num1 * num2);
  console.log(' times the result has been clicked');
});


$.ajax({
type: 'POST',
url: '/',
data: calaData,
success: function(response) {
  console.log('response from server is a success!');
}
});



}); // NOTE: FOR: $(document).ready(function () {
console.log('Javascript sourced');

// and the Server code would have something like
// router.post('/division', function(req, res){
//   //some code here
// });
// console.log('app.js success & mock server listening on Port 5000');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use (express.static('server/public')); // NOTE: Is it a static file?
app.use (bodyParser.urlencoded({extended: true})); // NOTE: does the request have data? Yes? Creates req.body & holds it until called upon  within app.post
var calculations = [];
var calcOne = "";
var calcTwo = "";

app.post('/', function(req, res) {
  var newCalc = req.body; // NOTE: .data from client.js becomes this req.body.  Now have the object from client.js within this variable
  console.log('client.js data is: ',newCalc);
  // calculations.push(newCalc);
  // console.log('var newCalc = req.body; returns: ', newCalc);
  // console.log(typeof newCalc);
  var calcOne = parseInt(newCalc.$num1);
  var calcTwo = parseInt(newCalc.$num2);
  var calcOps = newCalc.ops;
  // console.log(calcOps);
  // res.send('whaddup bitches');
  console.log(calcOne, calcTwo);
  console.log(typeof calcOne, calcTwo);


  // if (calcOps == '+') {
  //   console.log(calcOne + calcTwo);
  //   res.send(calcOne + calcTwo)
  // } else if (calcOps == '-') {
  //   console.log(calcOne - calcTwo);
  //   res.send(calcOne - calcTwo);
  // } else if (calcOps == '*') {
  //   console.log(calcOne * calcTwo);
  //   res.send(calcOne * calcTwo);
  // } else {
  //   console.log(calcOne / calcTwo);
  //   res.send(calcOne / calcTwo);
  // }

  if (calcOps == '+') {
    var answer = (calcOne + calcTwo);
  } else if (calcOps == '-') {
    answer = (calcOne - calcTwo);
  } else if (calcOps == '*') {
    answer = (calcOne * calcTwo);
  } else {
    answer = (calcOne / calcTwo);
  }

var objectToSend = {
  answer: answer
}
console.log('Final result = ',objectToSend);
res.send(objectToSend);
  // var stringResult = result.toString();
  // console.log(result);
  // console.log(typeof result);
  // res.send(result.toString());
  // console.log(result);
}); // NOTE: app.post
// console.log(calcOne, calcTwo);
// app.get('/', function(req, res) {
//   res.send(200);
// });

// NOTE: use res.send('whatever you're trying to send back');




// NOTE: From Vanilla Node/app.js
// var numberOne = 7;
// var numberTwo = 4;
// // NOTE: Multiplication
// console.log(calculator.multiply(numberOne, numberTwo));
// function multiply (firstNum, secondNum) {
//   var product = firstNum * secondNum;
//   return product;
// }
// // NOTE: Server
// var crazy = calculator.crazy(numberOne);
// var http = require('http'); // http built into node code as object
//
// http.createServer(function(req, res){
//   res.writeHead(200);
//   res.write('crazy'); // write status
//   res.end();
// }).listen(5000); //doesn't need to be 5000
// NOTE: END From Vanilla Node/app.js


app.listen(5000);
// console.log('Listening to Port 5000');

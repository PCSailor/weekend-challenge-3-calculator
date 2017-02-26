// and the Server code would have something like
// router.post('/division', function(req, res){
//   //some code here
// });
console.log('app.js success & mock server listening on Port 5000');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use (express.static('server/public')); // NOTE: Is it a static file?
app.use (bodyParser.urlencoded({extended: true})); // NOTE: does the request have data? Yes? Creates req.body & holds it until called upon  within app.post
var calculations = [];


var calcOne = "";
var calcTwo = "";
app.post('/', function(req, res) {
  var newCalc = req.body; // NOTE: .data from client.js becomes this req.body.  Now have the object from client.js within this variable
  calculations.push(newCalc);
  console.log('var newCalc = req.body; returns: ', newCalc);
  console.log(typeof newCalc);
  var calcOne = newCalc.$num1;
  var calcTwo = newCalc.$num2;
  var result = (calcOne - calcTwo).toString();
  // var stringResult = result.toString();
  console.log(result);
  console.log(typeof result);
  res.send(result.toString());
  console.log(result);
  // res.sendStatus(200);

});
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
console.log('Listening to Port 5000');

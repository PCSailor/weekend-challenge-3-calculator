// and the Server code would have something like
// router.post('/division', function(req, res){
//   //some code here
// });
console.log('app.js success & mock server listening on Port 5000');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use (express.static('server/public'));
app.use (bodyParser.urlencoded({extended: true}));


app.post('/calc', function(req, res) {
  var newCalc = req.body;
  console.log('new calc: ', newCalc);
  res.sendStatus(200);
});




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

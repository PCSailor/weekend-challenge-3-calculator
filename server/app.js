console.log('mock server success & listening on Port 5000');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use (express.static('server/public')); // NOTE: Is it a static file?
app.use (bodyParser.urlencoded({extended: true})); // NOTE: does the request have data? Yes? Creates req.body & holds it until called upon  within app.post
var calculations = [];
var calcOne = "";
var calcTwo = "";
// NOTE: Receiving and Sending
app.post('/', function(req, res) {
  var newCalc = req.body; // NOTE: .data from client.js becomes this req.body.  Now have the object from client.js within this variable
  console.log('client.js data is: ',newCalc);
  // calculations.push(newCalc);
  // console.log('var newCalc = req.body; returns: ', newCalc);
  // console.log(typeof newCalc);
  var calcOne = parseInt(newCalc.$num1);
  var calcTwo = parseInt(newCalc.$num2);
  var calcOps = newCalc.ops;
// NOTE: Math operations
if (calcOps == '+') {
    var answer = (calcOne + calcTwo);
  } else if (calcOps == '-') {
    answer = (calcOne - calcTwo);
  } else if (calcOps == '*') {
    answer = (calcOne * calcTwo);
  } else {
    answer = (calcOne / calcTwo);
  }
  // NOTE: Final Answer
var objectToSend = {
  answer: answer
}
console.log('Final result = ',objectToSend);
res.send(objectToSend); // NOTE: use res.send (to send object/string/function back to client.js)
}); // NOTE: app.post
app.listen(5000);

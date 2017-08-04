console.log('Server is running');

var randomNumber = require('./randomNumber.js');

var convertToDollars = require('./convertToDollars.js')

console.log(randomNumber(100,1000000));
console.log(convertToDollars(432.1545678));

var randomNumber = require('./randomNumber.js');

var convertToDollars = require('./convertToDollars.js')


function moduleThreeExport() {
    var random = (randomNumber(100, 1000000));
    return 'Account balance: ' + '<br>' + convertToDollars(random);
}
//= ('Account balance: ' + '<br>' + convertToDollars(random));

module.exports = moduleThreeExport;
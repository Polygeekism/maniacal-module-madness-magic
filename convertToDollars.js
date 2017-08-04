//make a function that accepts a number input and returns USD value
function makeMoney(inputValue){
    var monies = inputValue.toFixed(2);

    return '$' + monies;
}
//console.log(makeMoney(123456798.1409587968765));

module.exports = makeMoney;
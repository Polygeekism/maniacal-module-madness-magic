//are going to build a function to take into a min max and return a random number

function numberTumbler(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}
//exports the random number

module.exports =numberTumbler;
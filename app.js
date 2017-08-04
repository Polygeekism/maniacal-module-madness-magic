
var express = require('express');

var moduleThree = require('./moduleThree.js');

var app = express();
var port = 3000;

app.use(express.static('public'));


//on /module madness return results from moduleThree
app.get('/moduleMadness', function(req, res){
    res.send(moduleThree());
});

app.listen(port, function () {
    console.log('app is listening on', port);
});
//console.log(moduleThree);
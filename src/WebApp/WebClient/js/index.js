var $ = require('jquery');
var text = require('./text.js');

//document.getElementById("webpack-content").innerHTML = text;
$('#webpack-content').html(text + ' with jQuery');

console.log("index loaded");

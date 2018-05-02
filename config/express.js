var express = require('express');
var app = express();

//middleware
app.use(express.static('./public'));

module.exports = app;
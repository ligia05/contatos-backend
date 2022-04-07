var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var ContatosRouter = require('./routes/ContatosRouter');
var AuthRouter = require ('./routes/AuthRouter')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/contatos', ContatosRouter);
app.use('/', AuthRouter);
module.exports = app;

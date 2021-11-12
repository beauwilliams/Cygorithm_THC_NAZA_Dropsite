
// Load Node modules
var express = require('express');
const ejs = require('ejs');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
// FOR HEROKU
// https://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of
app.listen(process.env.PORT || 8080)

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
});

//ABI route to fetch on frontend
const path = require('path');
app.use(express.static(path.join(__dirname, '/public/contracts')))
app.use(express.static(path.join(__dirname, '/public/js')))


const mint = require('./public/app/mint.js');
const auth = require('./public/app/auth.js');


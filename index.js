const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
  res.render('index', {data: "FU"});
});

app.get('/registration', function (req, res) {
  res.render('registration');
});

app.post('/registration', function(req, res) {
	
});

app.get('/login', function (req, res) {
  res.render('login');
});

app.post('/login', function(req, res) {
	
});

app.listen(config.PORT, function (err) {
  console.log(`Server started on port ${config.PORT}`);
});
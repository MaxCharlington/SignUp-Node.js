const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const pgp = require('pg-promise');
const db = pgp(config.DBCONNECTION);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.render('index', {data: "FU"});
});

app.listen(config.PORT, function (err) {
  console.log(`Server started on port ${config.PORT}`);
});

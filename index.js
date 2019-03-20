const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/public', express.static('public'));


// set a cookie
app.use(function (req, res, next) {
  // check if client sent cookie
  let makeid = () => {
    var text = "";
    var possible = "ABCDEF0123456789";
    for (var i = 0; i < 64; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  let cookie = req.cookies.id;
  if (cookie === undefined) {
    //set a new cookie
    let randomID = makeid();
    randomID = randomID.substring(2, randomID.length);
    res.cookie('id', randomID);
    res.cookie('username', '');
  }
  else {
    //cookie was already present 
  }
  next();
});


//Index Page
app.get('/', function (req, res) {
  if (req.cookies.username == '') {
    req.cookies.username = "Аккаунт";
  }
  res.render('index', req.cookies);
});

app.post('/', function (req, res) {
  if (req.body) {
    if (req.body.search) {      
      res.send(req.body.search); //TMP
    } 
    else if (req.body.searchbar){
      res.render('search', req.cookies);
    }
    else {
      res.send('');
    }
  }
});


//Registration Page
app.get('/registration', function (req, res) {
  res.render('registration', req.cookies);
});

app.post('/registration', function(req, res) {
  let isPresent = (username, password) => {
    //tmp
    return false;
  } 
  if (!isPresent(req.body.username, req.body.password)) {
    res.cookie('username', req.body.username);
    res.render('index', Object.assign(req.cookies, req.body));
  }
});


//Login Page
app.get('/login', function (req, res) {
  res.render('login', req.cookies);
});

app.post('/login', function(req, res) {
  let isPresent = (username, password) => {
    //tmp
    return true;
  }
  if (isPresent(req.body.username, req.body.password)) {
    res.cookie('username', req.body.username);
    res.render('index', Object.assign(req.cookies, req.body));
  }
});


//Start Server
app.listen(config.PORT, function (err) {
  console.log(`Server started on port ${config.PORT}`);
});
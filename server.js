const express = require('express');
const hbs = require('hbs');

var app = express();

app.use(express.static(__dirname + "/public"));

hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});
app.set('view engine','hbs');

app.get('/',(req, res) => {
  //res.send("<h1>HelloExpress</h1>");
  res.render('home.hbs',{
    pageTitle: 'Some website',
    welcomeMessage: 'Welcome to the homePage'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs',{
    pageTitle: 'About page'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage:"You have made a bad request"
  });
});
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});

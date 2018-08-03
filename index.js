// desafio GoNode - módulo 2
// Autor: Leandra Mendes do Vale
// email: leandramvale@gmail.com

const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const routes = require('./app/routes');


const sessionConfig = require('./config/session');

const app = express();

app.use(express.static(path.resolve('app', 'public')));

// const { User } = require('./app/models');
// User.create({ name: 'Diego', email: 'diego@rocketseat.com.br', password: '123456' });

nunjucks.configure(path.resolve('app', 'views'), {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(sessionConfig));
app.use(flash());
app.use(methodOverride('_method'));

// app.get('/', (req, res) => {
//  res.render('index');
// });

app.use('/', routes);

app.listen(3000);

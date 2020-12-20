const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const postitRoute = require('./routes/postit');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@cluster0.i2hcd.mongodb.net/'+ process.env.DB_NAME +'?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion réussie !'))
.catch(() => console.log('Connexion échouée !'));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/', postitRoute);

module.exports = app;

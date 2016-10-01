/*  eslint-disable no-console  */
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const build = process.env.NODE_ENV || 'development';
const app = express();

const api = require('./api');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/api', api);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, (err) => {
  console.log(err || `server started port ${PORT}`);
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/template', (err) => {
  console.log(err || 'Mongoose connected!');
});


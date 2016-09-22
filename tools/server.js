/*  eslint-disable no-console */
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const mongoose = require('mongoose');
const config = require('../webpack.config');
const api = require('./api');

const PORT = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('webpack-hot-middleware')(compiler));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use('/api', api);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(PORT, (err) => {
  console.log(err || `server started port ${PORT}`);
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/template', (err) => {
  console.log(err || 'Mongoose connected!');
});


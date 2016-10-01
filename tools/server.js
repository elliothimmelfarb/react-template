/*  eslint-disable no-console  */
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const webpack = require('webpack');
const hotMiddleware = require('webpack-hot-middleware');
const devMiddleware = require('webpack-dev-middleware');
const config = require('../webpack.config');

const compiler = webpack(config);

const PORT = process.env.PORT || 3000;
const build = process.env.NODE_ENV || 'development'; // Is this being used?
const app = express();

const api = require('./api');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(hotMiddleware(compiler));
app.use(devMiddleware(
  compiler,
  {
    noInfo: true,
    publicPath: config.output.publicPath,
  })
);

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

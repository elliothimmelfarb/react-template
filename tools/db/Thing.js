const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const thingSchema = new mongoose.Schema({
  name: String,
});

const Thing = mongoose.model('Thing', thingSchema);

module.exports = Thing;

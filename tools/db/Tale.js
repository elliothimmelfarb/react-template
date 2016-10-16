const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const taleSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  chapters: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Chapter',
    required: true,
  }],
  rating: {
    type: Number,
    default: 0,
    required: true,
  },
});

const Tale = mongoose.model('Tale', taleSchema);

module.exports = Tale;

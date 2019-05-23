const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URL || 'mongodb://localhost:27017/blog';
mongoose.connect(connectionString);

module.exports = {
  User: require('./user'),
  Post: require('./post'),
}
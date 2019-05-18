const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  post: {
    type: String,
  },
  belongsToUser: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
});

const User = mongoose.model('User', UserSchema);
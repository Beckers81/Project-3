const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post',
  }]
});

const User = mongoose.model('User', UserSchema);
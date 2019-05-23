const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
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

UserSchema.pre('save', function(next) {
  const user = this;
  bcrypt.hash(user.password, 10)
    .then(hash => {
      user.password = hash;
      return next();
    })
    .catch(error => console.error('Something went wrong hashing the password! ', error));
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
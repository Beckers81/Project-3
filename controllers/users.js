const db = require('../models');

module.exports = {
  register: function(req, res) {
    console.log(req.body);

    db.User
      .create(req.body)
      .then(createdUser => res.json(createdUser))
      .catch(error => {
        console.error(error);
        res.status(500).json(error);
      });
  }
}
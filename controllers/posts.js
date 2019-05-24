const db = require('../models');

module.exports = {
  create: function(req, res) {
    console.log(req.body);

    db.Post
      .create(req.body)
      .then(createdUser => res.json(createdUser))
      .catch(error => {
        console.error(error);
        res.status(500).json(error);
      });
  }
};

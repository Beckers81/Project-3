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
  },
  login: function(req, res){
    console.log(req.body);
    db.User.findOne({ email: req.body.loginCreds.email })
      .then(user => {
        console.log({ user })
        if (!user) return res.status(401).json({ error: 'User doesn\'t exist in our records' });
        user.hasCorrectPassword(req.body.loginCreds.password, function (err, same) {
          if (err) return res.status(500).json({ error: err });
          if (!same) {
            return res.status(401).json({ error: 'Wrong password' })
          } else {
            return res.json(user);
          }
        });
      })
      .catch(error => {
        console.error('Something went wrong trying to find the user in the db: ', error);
        res.status(500).json({ error });
      })

  }
}


  // login: function(req, res) {
  //   console.log(req.body),
  //   res.status(500).json(error);
    
  //   bcrypt
  //   .compare(password, hash)
  //   .then(res =>{
  //     console.log(error);
  //     res.status(500).json(error);
  //   })
  //     .catch(err => console.log(err.message)
      
  //     )}};
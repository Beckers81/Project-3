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



// app.post('/api/postRoutes', function(req, res) {
//   Post.create({
//     post: req.body.usertitle.userPost,
//     message: req.body.usertitle.message,
//   }).then(post => {
//     res.json(post)
//   });
// });
// db.post(event);{
//   axios.post('/pages/BlogPost/BlogPost',
//     querystring.stringify({
//       name: e.state.name,
//       value: e.state.value,
//     }).then(function(response) {
//     e.setState({
//       messageFromServer: response.data
//     });
//   }))
// };

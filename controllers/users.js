

module.exports = {
  register: function(req, res) {
    console.log(req.body);
    res.json(req.body)
  }
}
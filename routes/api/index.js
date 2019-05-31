const express = require('express');
const router = express.Router();
const path = require("path");

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
// router.use('/posts', postRoutes);

// router.use("/api", apiRoutes);



// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
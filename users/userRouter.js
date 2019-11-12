const express = require('express')
const router = express.Router();
const db = require('./userModel.js')
const authMiddleware = require('../auth/authMiddleware.js')


router.get("/", authMiddleware, (req, res) => {
  db.find()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// router.get('/', authMiddleware, (req,res) => {
//      db.find()
//      .then(response => {
//           res.status(201).json(response)
//      })
//      .catch(error => {
//           res.status(500).json(error)
//      })
// })

module.exports = router;
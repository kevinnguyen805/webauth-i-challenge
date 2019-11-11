const express = require('express')
const router = express.Router();
const db = require('./usersModel.js')
const authMiddleware = require('../auth/authMiddleware.js')

//TODO: ENDPOINT = /api/users
router.get('/', authMiddleware, (req, res) => {
     db.find()
     .then(users => {
          res.status(201).json(users)
     })
     .catch(error => {
          res.status(500).json({message: "Unable to retrieve all users"})
     })
})

module.exports = router
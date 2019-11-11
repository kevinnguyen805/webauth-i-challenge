const bcrypt = require('bcryptjs')
const express = require('express')
const router = express.Router();
const db = require('../users/usersModel.js')

//TODO: ENDPOINT = /api/auth/register
router.post('/register', (req, res) => {
     const newUser = req.body

     // hash password before adding new user (make it all one function)
     bcrypt.hash(newUser.password, 12, (err, hashedPassword ) => {
          newUser.password = hashedPassword;

          db.add(newUser)
          .then(saved => {
               console.log(saved)
               res.status(201).json(saved)
          })
          .catch(error => {
               res.status(500).json(error)
          })
     })
})


//TODO: ENDPOINT = /api/auth/login
router.post('/login', (req, res) => {
     let username = req.body.username

     db.findBy({username})
     .first()
     .then(response => {
          if(response && bcrypt.compareSync(req.body.password, response.password)){
               res.status(200).json({message: `Welcome ${response.username}`})
          }
          else {
               res.status(401).json({message: 'Invalid credentials'})
          }
     })
     .catch(error => {
          res.status(500).json(error)
     })
})




module.exports = router 
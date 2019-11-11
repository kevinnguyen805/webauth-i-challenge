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
               res.status(201).json(saved)
          })
          .catch(error => {
               res.status(500).json(error)
          })
     })
})


//TODO: ENDPOINT = /api/auth/login
router.post('/login', (req, res) => {
     const username = req.body.username;
     const password = req.body.password;

     if(username && password){
          db.findBy(username)
          .first()
          .then(response => {
               if(response && bcrypt.compareSync(password, response.password)){
                    res.status(201).json({message: `Welcome ${response.username}`})
               } else {
                    res.status(401).json({message: "Invalid credentials"})
               }
          })
          .catch(error => {
               res.status(500).json({message: "Unable to login, please try again later"})
          })
     } else {
          res.status(401).json({message: "Please provide valid credentials"})
     }
})




module.exports = router 
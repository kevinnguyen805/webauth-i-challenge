const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const db = require('../users/userModel.js')


router.post('/register', (req, res) => {
     const newUser = req.body
     const hash = bcrypt.hashSync(newUser.password, 12)
     newUser.password = hash

     db.add(newUser)
     .then(response => {
          req.session.username = response.username
          res.status(201).json(response)
     })
     .catch(error => {
          res.status(500).json(error)
     })
})

router.post('/login', (req, res) => {
     let {username, password} = req.body      // * MUST BE 'LET' SO PASSWORD CAN BE HASHED AND COMPARED

     if(username && password){
          db.findBy(username)
          .first()
          .then(response => {
               if(response && bcrypt.compareSync(password, response.password)){
                    req.session.username = response.username
                    res.status(201).json({message: `Welcome ${response.username}!`})
               }
               else{
                    res.status(401).json({error: "Please provide the correct password"})
               }
          })
          .catch(error => {
               res.status(401).json({error: "Username was not found"})
          })
     } else {
          res.status(500).json({error: "Unable to login. Please try again later"})
     }
})

router.get('/logout', (req, res) => {
     if (req.session){
          req.session.destroy(error => {
               if(error){
                    res.status(500).json({message: "Unsuccessful log out "})
               } else {
                    res.status(200).json({message: "logged out susccessfully "})
               }
          })
     } else {
          res.status(500).json({message: "You were never logged in to begin with"})
     }
})


module.exports = router
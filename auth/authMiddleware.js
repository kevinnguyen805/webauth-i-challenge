const bcrypt = require('bcryptjs')
const db = require('../users/usersModel.js')

module.exports = (req, res, next) => {
     // read the username, password from header not body so it works on GET
     let username = req.headers.username
     let password = req.headers.password

     if(username && password){
          db.findBy(username)
          .first()
          .then(response => {
               if(response && bcrypt.compareSync(password, response.password)){
                    next();
               } else {
                    res.status(401).json({message: "Invalid credentials"})
               }
          })
          .catch(error => {
               res.status(500).json({message: "Unable to login, please try again later"})
          })
     } else {
          res.status(401).json({message: "Please provide credentials"})
     }
}
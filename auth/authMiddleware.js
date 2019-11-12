const bcrypt = require('bcryptjs')
const db = require('../users/userModel.js')

// ENDPOINT AUTHENTICATION
module.exports = (req, res, next) => {
     if(req.session && req.session.username){
          
     }

}


// module.exports = (req, res, next) => {
//   const { username, password } = req.headers;

//   if (username && password) {
//     db.findBy(username)
//       .first() // * YOU NEED TO SAY FIRST TO TAKE IT OUT OF THE ARRAY!
//       .then(response => {
//         if (response && bcrypt.compareSync(password, response.password)) {
//           next();
//         } else {
//           res.status(401).json({ message: "Invalid credentials" });
//         }
//       })
//       .catch(error => {
//         res
//           .status(500)
//           .json({
//             message: "Unable to retrieve data. Please try again later."
//           });
//       });
//   } else {
//     res.status(401).json({ message: "Please provide valid credentials" });
//   }
// };




// * IMPORT DEPENDENCIES 
const bcrypt = require('bcryptjs');
const express = require('express')
const router = express.Router();



//* IMPORT ROUTERS/ENDPOINTS /api/auth -- /api/users
const authRouter = require('../auth/authRouter.js')
const usersRouter = require('../users/usersRouter.js')

router.use('/auth', authRouter)
router.use('/users', usersRouter)



// TODO: ENDPOINT =  /api/ ----  /api/hash
router.get('/', (req, res) => {
     res.json({api: "Hello you are at the root of the api!"})
})
router.post('/hash', (req, res) => {
     const password = req.body.password;
     const hash = bcrypt.hashSync(password, 12)
     res.status(200).json({ password, hash})
})




module.exports = router 
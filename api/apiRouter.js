const express = require('express')
const router = express.Router();
const authRouter = require('../auth/authRouter.js')
const userRouter = require('../users/userRouter.js')

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.get('/', (req, res) => {
     res.send('Hello! You are in /api root!')
})

module.exports = router;
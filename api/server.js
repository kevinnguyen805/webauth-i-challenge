const express = require('express')
const apiRouter = require('./apiRouter.js')
const configureMiddleware = require('./configure-middleware.js')

const server = express();
configureMiddleware(server);


server.use('/api', apiRouter);

server.get('/', (req, res) => {
     res.send("Hello you are at the root")
})

module.exports = server;
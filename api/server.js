const express = require('express')
const apiRouter = require('./apiRouter.js')
const helmet = require('helmet')
const configureMiddleware = require('./configure-middleware.js')

const server = express();
configureMiddleware(server);


server.use(helmet());
server.use(express.json())
server.use('/api', apiRouter);

server.get('/', (req, res) => {
     res.send("Hello you are at the root")
})

module.exports = server;
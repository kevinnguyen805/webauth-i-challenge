const express = require('express')
const configureMiddleware = require('./configureMiddleware.js')
const apiRouter = require('./apiRouter.js')
const session = require('express-session')
const KnexSessionStorage = require('connect-session-knex')(session)
const knexConnection = require('../data/db-config.js')

const server = express();
configureMiddleware(server);

const sessionConfiguration = {
     name: "kevin",
     secret: process.env.COOKIE_SECRET || 'is it secret? is it safe?',
     cookie:{
          maxAge: 1000 * 60 * 60 * 10, 
          secure: process.env.NODE_ENV === 'development' ? false : true,
          httpOnly: true
     },
     resave: false, 
     saveUninitialized: true,
     store: new KnexSessionStorage({
          knex: knexConnection,
          clearInterval: 1000 * 60 * 10,
          tablename:"user_sessions",
          sidfieldname: "id",
          createtable:true
     })
}

server.use(session(sessionConfiguration))
server.use('/api', apiRouter);
server.get('/', (req, res) => {
     res.json({session: req.session})
})

module.exports = server;

const db = require('../data/db-config.js')

module.exports = {
     add,
     find,
     findBy,
     findById
}


function find(){
     return db('users').select('id', 'username')
}

function findBy(login){
     return db('users')
     .where('username', '=', login)
}

function findById(id){
     return db('users')
     .select('id', 'username')
     .where('id', '=', id)
     .first()
}

function add(newUser){
     return db('users')
     .insert(newUser, 'id')
     // .then(([id]) => findById(id))
}
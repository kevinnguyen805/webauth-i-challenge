const db = require('../data/db-config.js')

module.exports = {
     add,
     find,
     findBy,
     findById
}

//* FIND : get all users id/username 
function find(){
     return db('users')
     .select('id', 'username', 'password')
}

//* FINDBY : get users 
function findBy(filter){
     return db('users')
     .where(filter)
}

//* ADD : post new user 
function add(user){
     return db('users')
     .insert(user, 'id')
     // .then(([id]) => findBy(id))
}

//* FINDBYID : get by user's id
function findById(id){
     return db('users')
     .select('id', 'username')
     .where({id})
     .first()
}
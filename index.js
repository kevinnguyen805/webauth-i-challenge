require('dotenv').config()

const server = require('./api/server.js')
const port = process.env.PORT || 4500

server.listen(port, () => {
     console.log(`We are listening on port ${port}`)
})

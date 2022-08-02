require('express-async-errors')
const { port } = require('../config/vars')
const server = require('../config/server')

server.listen(port || 3030, () => {
  console.log('server started at', port || 3030)
})

const { APIError } = require('../utils/APIError')

const errorHandler = (err, req, res, next) => {
  if (err instanceof APIError) {
    return res.status(err.statusCode).json({
      message: err.message
    })
  }

  console.error(err)

  return res.status(500).json({ message: 'Internal server error.' })
}

module.exports = { errorHandler }

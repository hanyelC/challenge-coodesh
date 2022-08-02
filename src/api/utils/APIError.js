class APIError {
  constructor(statusCode, message) {
    this.statusCode = statusCode
    this.message = message
  }
}

module.exports = { APIError }

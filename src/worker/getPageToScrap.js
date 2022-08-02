const { ImportsRepository } = require('./repositories/importsRepository-PG')

const getPageToScrap = async () => {
  const importsRepository = new ImportsRepository()

  const page = await importsRepository.getLastRow()

  if (page) {
    return page.page_number + 1
  } else {
    return 1
  }
}

module.exports = { getPageToScrap }

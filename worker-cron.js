const cron = require('node-cron')
const fs = require('fs')
const { main: worker } = require('./src/worker')

const configs = fs.readFileSync('./cron.config.json').toString()
const { minute, hour } = JSON.parse(configs)

const task = cron.schedule(`${minute} ${hour} * * *`, worker, { timezone: 'America/Sao_Paulo' })

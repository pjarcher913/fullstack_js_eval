const knex = require('knex')

const database = knex({
  client: 'pg',
  connection: {
    port: 5432,
    user: 'mantl',
    password: 'mantl',
    hostname: 'localhost',
    database: 'mantl'
  }
})

module.exports = { database, knex }

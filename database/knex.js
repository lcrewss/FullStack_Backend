var environment = process.env.NODE_ENV || 'development'
var knex = require('knex')
var configs = require('../knexfile.js')[environment]
var dbConfigs = knex(configs);

module.exports = dbConfigs

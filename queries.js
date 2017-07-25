var knex = require('./database/knex')
module.exports = {
  getLiquors: function(){
    return knex('liquors')
    .select()
  }
}

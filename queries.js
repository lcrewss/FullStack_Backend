var knex = require('./database/knex')
module.exports = {
  getLiquors: function(){
    return knex('liquors')
    .select()
  },
  getLiquorsById: function(name){
    return knex('liquors')
    .where('name',name)
  }
}

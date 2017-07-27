var express = require('express');
var router = express.Router();
var queries = require('../queries')
var knex = require('../database/knex')
// var bodyParser = require('body-parser')


router.get('/', function(request, response){
  queries.getLiquors().then(function(liquors){
    response.json(liquors)

  })
})
  //
  // router.get('/:name',function(request, response){
  //   var name=request.params.name
  //   queries.getLiquorsById(name).then(function(liquors){
  //
  //     response.json(name)
  //   })
  // })

router.post('/', function(request, response){
  request.body.like=true
  knex('liquors').insert(request.body).then(function(){
    response.json({message: 'success!'});
  })
})

module.exports = router

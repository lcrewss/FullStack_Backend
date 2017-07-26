var express = require('express');
var router = express.Router();
var queries = require('../queries')


router.get('/', function(request, response){
  queries.getLiquors().then(function(liquors){
    response.json(liquors)

  })
})

  router.get('/:name',function(request, response){
    var name=request.params.name
    queries.getLiquorsById(name).then(function(liquors){

      response.json(name)
    })
  })


module.exports = router

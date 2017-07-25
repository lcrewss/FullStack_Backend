var express = require('express');
// var cors = require('cors');
var router = express.Router();
var queries = require('../queries')


router.get('/', function(request, response){
  queries.getLiquors().then(function(liquors){
    response.json(liquors)

  })
})

module.exports = router

var express = require('express');
var app = express();
var route = require('./routes/liquor_routes')
var port = process.env.PORT || 3000
var cors = require('cors')
var bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', route)


app.listen(port, function(){
  console.log(port);
})

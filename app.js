var express = require('express');
var app = express();
var route = require('./routes/liquor_routes')
var port = process.env.PORT || 3000

app.use('/', route)

app.listen(port)

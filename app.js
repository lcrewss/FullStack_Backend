var express = require('express');
var app = express();
var route = require('./routes/liquor_routes')

app.use('/', route)

app.listen(3000)

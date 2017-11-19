
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB

var connectionURL = 'mongodb://tecweb:123@tecweb-ti-shard-00-00-bilgl.mongodb.net:27017,tecweb-ti-shard-00-01-bilgl.mongodb.net:27017,tecweb-ti-shard-00-02-bilgl.mongodb.net:27017/tecweb?ssl=true&replicaSet=tecweb-ti-shard-0&authSource=admin'

mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL || connectionURL);
// mongoose.connection.on('error', function(){});

// Express
var app = express();


app.use(express.static(__dirname + '/../app'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', require('./router'));

// Start server
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
, ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
app.listen(port, ip, function() {
  console.log('Express server listening on %d', port);
});
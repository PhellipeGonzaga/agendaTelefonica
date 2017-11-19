// Dependencies
var express = require('express');
var router = express.Router();

//Telefone
var Telefones = require('./models/telefone');
Telefones.methods(['get', 'put', 'post', 'delete']);
Telefones.register(router, '/telefones');

// Return router
module.exports = router;
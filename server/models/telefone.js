// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var telefoneSchema = new mongoose.Schema({
    nome: String,
    telefone: String,
    data: Date
});

// Return model
module.exports = restful.model('Telefone', telefoneSchema);
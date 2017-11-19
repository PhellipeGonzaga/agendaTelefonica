
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var operadoraSchema = new mongoose.Schema({
    nome: String,
    codigo: String,
    categoria: String 
});

// Return model
module.exports = restful.model('Operadora', operadoraSchema);
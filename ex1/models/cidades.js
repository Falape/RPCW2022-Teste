var mongoose = require('mongoose')

var cidadesSchema = new mongoose.Schema({
    _id: String,
    nome: String,
    população: Number,
    descrição:String,
    distrito: String
})

module.exports = mongoose.model('cidades', cidadesSchema) 
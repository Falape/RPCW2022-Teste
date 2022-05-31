var mongoose = require('mongoose')

var ligacoesSchema = new mongoose.Schema({

    _id:  String,
    origem:  String,
    destino:  String,
    distância : Number
})

module.exports = mongoose.model('ligacoes', ligacoesSchema) 
const Ficheiro = require('../models/cidades');
var mongoose = require('mongoose')


module.exports.listarTodas = function () {
    return Ficheiro
        .find({},{_id:1,nome:1,distrito:1})
        .exec()
}

module.exports.listarUma = id => {
    return Ficheiro
        .find({_id: id})
        .exec()
}

module.exports.listaPorNomes = function () {
    return Ficheiro
        .find({},{_id:0,nome:1})
        .sort({nome:1})
        .exec()
}

module.exports.listaDistrito = distrito => {
    return Ficheiro
        .find({distrito:distrito},{_id:1,nome:1})
        .exec()
}
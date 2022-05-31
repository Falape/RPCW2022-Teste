const Ficheiro = require('../models/ligacoes');
var mongoose = require('mongoose')


module.exports.listarOrigem = origem => {
    return Ficheiro
        .find({origem:origem},{_id:1,destino:1})
        .exec()
}

module.exports.listarDist = dist => {
    return Ficheiro
        .find({origem:{$gte:dist}},{_id:1,origem:1,destino:1})
        .exec()
}
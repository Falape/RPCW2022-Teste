var express = require('express');
var router = express.Router();

var CidadesControl = require('../controllers/cidades')

var LigacoesControl = require('../controllers/ligacoes')


router.get('/cidades', function (req, res, next) {
  if (req.query['distrito'] != undefined) {
    console.log(req.query)
    CidadesControl.listaDistrito(req.query['distrito'])
      .then(dados => res.status(200).jsonp(dados))
      .catch(error => res.status(500).jsonp({ error: error }))
  }
  else {
    CidadesControl.listarTodas()
      .then(dados => res.status(200).jsonp(dados))
      .catch(erro => res.status(501).jsonp(erro))
  }
});

router.get('/cidades/:id', function (req, res, next) {
  console.log(req.params.id)
  CidadesControl.listarUma(req.params.id)
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(502).jsonp(erro))
});

router.get('/cidades/nomes', function (req, res, next) {
  CidadesControl.listaPorNomes()
    .then(dados => res.status(200).jsonp(dados))
    .catch(erro => res.status(503).jsonp(erro))
});


router.get('/ligacoes', function (req, res, next) {
  if (req.query['origem'] != undefined) {
    console.log(req.query)
    LigacoesControl.listarOrigem(req.query['origem'])
      .then(dados => res.status(200).jsonp(dados))
      .catch(error => res.status(504).jsonp({ error: error }))
  }
  else if(req.query['dist'] != undefined){
    LigacoesControl.listarDist(req.query['dist'])
      .then(dados => res.status(200).jsonp(dados))
      .catch(erro => res.status(505).jsonp(erro))
  }else{
    res.status(506).jsonp(erro)
  }
});







module.exports = router;

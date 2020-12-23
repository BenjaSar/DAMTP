var express = require('express');
var routerDispositivo = express.Router();
var mysql =  require('../../mysql');

routerDispositivo.get('/', function (req, res) {
    mysql.query('Select * from Dispositivos', function (err, result) {
        if(err){
            res.send(err);
        }
        res.send(result);
    });
});

//Metodo get que obtiene un objeto con id con la ultima medicion
routerDispositivo.get('/:id', function (req, res) {
    mysql.query('Select * from Mediciones where dispositivoId=? order by fecha desc', [req.params.id],function (err, result) {
        if(err){
            res.send(err).status(400);
        }
        res.send(result[0]);
    });
});

module.exports =  routerDispositivo;  //Se pone a disposición la variable routerDispositivo


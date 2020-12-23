var express = require('express');
var routerMedicion = express.Router();
var mysql =  require('../../mysql');

//Metodo get que recibe un parametro id de dispositivo y devuelve todos los valores de la tabla medicion para el Id dado
routerMedicion.get('/:id/todas', function (req, res) {
    mysql.query('Select * from Mediciones where dispositivoId=? order by fecha desc', [req.params.id], function (err, result) {
        if(err){
            res.send(err).status(400);
        }
        res.send(result);
    });
});

//Método POST que recibe por parametro el Id del dispositivo e inserta un nuevo registro con los datos
routerMedicion.post('/', function(req, res){
    mysql.query('Insert to Mediciones (fecha, valor, dispositivoId) values(?,?,?)',[req.body.fecha, re.body.valor, req.body.id], function(err, result, fields){
        if(err){
            res.send(err).status(400);
        }
        res.send(result);
    });
});   
 

module.exports =  routerMedicion;  


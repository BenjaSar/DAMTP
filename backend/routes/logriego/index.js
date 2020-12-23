var express = require('express');
var routerlogRiego = express.Router();
var mysql =  require('../../mysql');

//Metodo get que recibie un parametro id de electrovalvula y devuelve todos los valores de la tabla medicion para el Id dado

routerlogRiego.get('/:id/todas', function (req, res) {
    mysql.query('Select * from Log_Riegos where electrovalvulaId=? order by fecha desc', [req.params.id], function (err, result) {
        if(err){
            res.send(err).status(400);  
        }
        res.send(result);
    });
});

module.exports =  routerlogRiego;  


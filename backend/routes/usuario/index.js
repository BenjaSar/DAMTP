//Contiene todos los endpoints de usuarios
var express = require('express');
var routerUsuario = express.Router();

routerUsuario.get('/', function (req, res) {
    res.send("Usuario");

});

routerUsuario.post('/', function (req, res) {
    res.send("Insert Usuario");

})

module.exports =  routerUsuario;
//nmp init
//nmp install --save express

const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const private = require('../controller/private.controller');

router.get('/home', verifyToken, private.getHome);

function verifyToken(req, res, next) {
    if(!req.headers.authorization){
        return res.status(401).send('Permiso denegado');
    }

    const token = req.headers.authorization.split(' ')[1];

    if(token == null){
        return res.status(401).send('Permiso denegado');
    }

    const payload = jwt.verify(token, 'secretkey');
    //console.log(payload);
    req.usuario_id = payload._id;

    if(req.usuario_id == null){
        return res.status(401).send('Permisos denegado');
    }

    next();
    //return res.status(200).send('Hola');
}

module.exports = router;
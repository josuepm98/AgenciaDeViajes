const express = require('express');
const router = express.Router();

const usuario = require('../controller/usuario.controller');

//usuarios
router.post('/login', usuario.loginUsuario);
router.get('/', usuario.getUsuarios);
router.post('/', usuario.crearUsuario);
router.get('/:id', usuario.getUsuario);
router.post('/:id', usuario.getUsuario);
router.put('/:id', usuario.editUsuario);
router.delete('/:id', usuario.deleteUsuario);



module.exports = router;
const express = require('express');
const router = express.Router();

const banco = require('../controller/banco.controller');

//rutas
router.post('/reserva', banco.reserva);
router.get('/', banco.getBancos);
router.post('/', banco.crearBanco);
router.delete('/:id', banco.deleteBanco);

module.exports = router;
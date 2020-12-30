const express = require('express');
const router = express.Router();

const reserva = require('../controller/reserva.controller');

//rutas
router.get('/', reserva.getReservas);
router.post('/', reserva.crearReserva);
router.delete('/:id', reserva.deleteReserva);

module.exports = router;
const express = require('express');
const router = express.Router();

const vehiculo = require('../controller/vehiculo.controller');

//rutas
router.get('/', vehiculo.getVehiculos);
router.post('/', vehiculo.crearVehiculo);
router.delete('/:id', vehiculo.deleteVehiculo);

module.exports = router;
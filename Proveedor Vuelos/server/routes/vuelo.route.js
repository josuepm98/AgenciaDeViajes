const express = require('express');
const router = express.Router();

const vuelo = require('../controller/vuelo.controller');

//rutas
router.get('/', vuelo.getVuelos);
router.post('/', vuelo.crearVuelo);
router.delete('/:id', vuelo.deleteVuelo);

module.exports = router;
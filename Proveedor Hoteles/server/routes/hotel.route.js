const express = require('express');
const router = express.Router();

const hotel = require('../controller/hotel.controller');

//rutas
router.get('/', hotel.getHotels);
router.post('/', hotel.crearHotel);
router.delete('/:id', hotel.deleteHotel);

module.exports = router;
const mongoose = require('mongoose');
const { Schema } = mongoose;

const HotelSchema = new Schema({
    checkin: {type: String, required: true },
    checkout: {type: String, required: true },
    habitacion: {type: String, required: true },
    ciudad: {type: String, required: true },
    precio: {type: Number }
})

module.exports = mongoose.model('Hotel', HotelSchema);

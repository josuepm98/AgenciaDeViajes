const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReservaSchema = new Schema({
    usuario: { type: String },
    vuelo: { type: String},
    vehiculo: { type: String },
    hotel: {type: String }
})

module.exports = mongoose.model('Reserva', ReservaSchema);
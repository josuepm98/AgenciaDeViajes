const mongoose = require('mongoose');
const { Schema } = mongoose;

const VehiculoSchema = new Schema({
    tipo: {type: String, required: true },
    combustible: {type: String, required: true },
    marca: {type: String, required: true },
    precio: {type: Number },
    fechaIni: {type: String, required: true },
    fechaFin: {type: String, required: true }
})

module.exports = mongoose.model('Vehiculo', VehiculoSchema);

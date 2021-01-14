const mongoose = require('mongoose');
const { Schema } = mongoose;

const VueloSchema = new Schema({
    ida: {type: String, required: true },
    vuelta: {type: String, required: true },
    origen: {type: String, required: true },
    destino: {type: String, required: true },
    precio: {type: Number }
})

module.exports = mongoose.model('Vuelo', VueloSchema);

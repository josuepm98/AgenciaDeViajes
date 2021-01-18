const mongoose = require('mongoose');
const { Schema } = mongoose;

const BancoSchema = new Schema({
    nombre: {type: String, required: true },
    cuenta: {type: String },
    codigo: {type: Number }
})

module.exports = mongoose.model('Banco', BancoSchema);

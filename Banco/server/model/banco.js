const mongoose = require('mongoose');
const { Schema } = mongoose;

const BancoSchema = new Schema({
    nombre: {type: String, required: true },
})

module.exports = mongoose.model('Banco', BancoSchema);

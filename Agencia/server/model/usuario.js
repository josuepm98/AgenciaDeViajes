const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    telefono: { type: Number },
    cuenta: { type: Number, required: true },
    password: {type: String, required: true}
})

module.exports = mongoose.model('Usuario', UsuarioSchema);



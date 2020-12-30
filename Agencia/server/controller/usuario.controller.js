const Usuario = require('../model/usuario');
const jwt = require('jsonwebtoken');

const usuarioController = {};

usuarioController.loginUsuario = async(req, res) => {
    const { nombre, password } = req.body;
    const usuario = await Usuario.findOne({nombre})

    if(!usuario){
        return res.status(401).send({status:"No existe dicho usuario"});
    }
    if(usuario.password != password){
        return res.status(401).send({status:"Contraseña erronea"});
    }

    const token = jwt.sign({_id: usuario._id}, 'secretkey');
    return res.status(200).json({token})
};


usuarioController.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

usuarioController.crearUsuario = async (req, res) => {
    const usuario = new Usuario({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        telefono: req.body.telefono,
        cuenta: req.body.cuenta,
        password: req.body.password
    });
    await usuario.save();

    const token = jwt.sign({_id: usuario._id}, 'secretkey');
    res.status(200).json({token})
    res.json({
        'status': 'Usuario guardado con éxito!'
    });
};

usuarioController.getUsuario = async (req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
};

usuarioController.editUsuario = async (req, res) => {
    //const { id } = req.params;
    const usuario = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        telefono: req.body.telefono,
        cuenta: req.body.cuenta,
        password: req.body.password
    }
    await Usuario.findByIdAndUpdate(req.params.id, {$set: usuario}, {new: true});
    res.json({status: 'Usuario actualizado'})
};

usuarioController.deleteUsuario = async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({status: 'Usuario eliminado'});
};

module.exports = usuarioController;
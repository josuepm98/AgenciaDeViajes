const Vuelo = require('../model/vuelo');

const vueloController = {};

vueloController.getVuelos = async (req, res) => {
    const vuelos = await Vuelo.find();
    res.json(vuelos);
};

vueloController.crearVuelo = async (req, res) => {
    const vuelo = new Vuelo({
        ida: req.body.ida,
        vuelta: req.body.vuelta,
        origen: req.body.origen,
        destino: req.body.destino,
        precio: req.body.precio
    });
    await vuelo.save();
    res.json({
        'status': 'Vuelo guardado con éxito!'
    });
};

vueloController.getVuelo = async (req, res) => {
    const vuelo = await Vuelo.findById(req.params.id);
    res.json(vuelo);
};

vueloController.deleteVuelo = async (req, res) => {
    await Vuelo.findByIdAndDelete(req.params.id);
    res.json({status: 'Vuelo eliminado'});
};

module.exports = vueloController;
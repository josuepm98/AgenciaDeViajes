const Vehiculo = require('../model/vehiculo');

const vehiculoController = {};

vehiculoController.getVehiculos = async (req, res) => {
    const vehiculos = await Vehiculo.find();
    res.json(vehiculos);
};

vehiculoController.crearVehiculo = async (req, res) => {
    const vehiculo = new Vehiculo({
        tipo: req.body.tipo,
        combustible:  req.body.combustible,
        marca:  req.body.marca,
        precio:  req.body.precio,
        fechaIni: req.body.fechaIni,
        fechaFin: req.body.fechaFin
    });
    await vehiculo.save();
    res.json({
        'status': 'Vehiculo guardado con éxito!'
    });
};

vehiculoController.getVehiculo = async (req, res) => {
    const vehiculo = await Vehiculo.findById(req.params.id);
    res.json(vehiculo);
};

vehiculoController.deleteVehiculo = async (req, res) => {
    await Vehiculo.findByIdAndDelete(req.params.id);
    res.json({status: 'Vehiculo eliminado'});
};

module.exports = vehiculoController;
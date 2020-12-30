const Reserva = require('../model/reserva');

const reservaController = {};

reservaController.getReservas = async (req, res) => {
    const reservas = await Reserva.find();
    res.json(reservas);
};

reservaController.crearReserva = async (req, res) => {
    const reserva = new Reserva({
        usuario: req.body.usuario,
        vuelo: req.body.vuelo,
        vehiculo: req.body.vehiculo,
        hotel: req.body.hotel,
    });
    await reserva.save();
    res.json({
        'status': 'Reserva guardada con éxito!'
    });
};

reservaController.getReserva = async (req, res) => {
    const reserva = await Reserva.findById(req.params.id);
    res.json(reserva);
};

reservaController.deleteReserva = async (req, res) => {
    await Reserva.findByIdAndDelete(req.params.id);
    res.json({status: 'Reserva eliminada'});
};

module.exports = reservaController;
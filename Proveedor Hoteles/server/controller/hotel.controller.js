const Hotel = require('../model/hotel');

const hotelController = {};

hotelController.getHotels = async (req, res) => {
    const hotels = await Hotel.find();
    res.json(hotels);
};

hotelController.crearHotel = async (req, res) => {
    const hotel = new Hotel({
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        habitacion: req.body.habitacion,
        precio: req.body.precio
    });
    await hotel.save();
    res.json({
        'status': 'Hotel guardado con éxito!'
    });
};

hotelController.getHotel = async (req, res) => {
    const hotel = await Hotel.findById(req.params.id);
    res.json(hotel);
};

hotelController.deleteHotel = async (req, res) => {
    await Hotel.findByIdAndDelete(req.params.id);
    res.json({status: 'Hotel eliminado'});
};

module.exports = hotelController;
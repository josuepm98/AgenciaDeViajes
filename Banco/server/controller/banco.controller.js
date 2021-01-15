const Banco = require('../model/banco');

const bancoController = {};

bancoController.reserva = (req, res) => {
    var num = Math.floor(Math.random() * 10000); 
    if(num % 2 != 0){
        return res.status(401).send({status:"Operación cancelada"});
    }
    return res.status(200).send({status:"Transacción realizada"});
}

bancoController.getBancos = async (req, res) => {
    const bancos = await Banco.find();
    res.json(bancos);
};

bancoController.crearBanco = async (req, res) => {
    const banco = new Banco({
        nombre: req.body.nombre
    });
    await banco.save();
    res.json({
        'status': 'Banco guardado con éxito!'
    });
};

bancoController.getBanco = async (req, res) => {
    const banco = await Banco.findById(req.params.id);
    res.json(banco);
};

bancoController.deleteBanco = async (req, res) => {
    await Banco.findByIdAndDelete(req.params.id);
    res.json({status: 'Banco eliminado'});
};

module.exports = bancoController;
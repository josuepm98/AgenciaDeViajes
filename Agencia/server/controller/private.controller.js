const privateController = {};

privateController.getHome = (req, res) => {
    res.json(req.usuario_id);
};

module.exports = privateController;
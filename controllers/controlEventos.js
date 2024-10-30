const eventos = require ('../models/eventos');

const getEventos = (req, res) => {
    eventos.getALL((error, eventos) => {
        if (error) {
            return res.status(500).json({error: 'Error al obtener eventos'});
        }
        res.status(200).json(eventos);
    });
};
module.exports = {
    getEventos
};

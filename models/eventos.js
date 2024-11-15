const db = require ('../config/db');
const { addEvento, deleteEvento } = require('../controllers/controlEventos');
const eventos = {
getAll : (callback) => {
        const query = 'SELECT * FROM EVENTO WHERE estado=1';
        db.query (query, (error, results) => {
            if (error){
                return callback (error, null);
            }
            return callback (null, results);
        });
    },

    addEvento: (nombre, dia, costo, lugar, horario, callback) => {
        const query = 'INSERT INTO EVENTO (nombre, dia, costo, lugar, horario) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [nombre, dia, costo, lugar, horario], (error, result) => {
            if (error) {
                return callback(error, null);
            }
            return callback(null, result);
        });
    },
    deleteEvento: (id, callback) => {
        const query = 'UPDATE evento SET estado=0 WHERE id_evento =  '+id+';';
        db.query(query, [id], (error) => {
            if (error) {
                return callback(error);
            }
            return callback(null);
        });
    }
};
module.exports = eventos;

//modelo delete eve
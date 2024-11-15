const db = require ('../config/db');
const { addEvento, deleteEvento } = require('../controllers/controlEventos');
const eventos = {
getAll : (callback) => {
        const query = 'SELECT * FROM EVENTO WHERE estado=1 ORDER BY id_evento DESC';
        db.query (query, (error, results) => {
            if (error){
                return callback (error, null);
            }
            return callback (null, results);
        });
    },

    addEvento: (nombre, dia, costo, lugar, horario, estado, callback) => {
        const query = 'INSERT INTO EVENTO (nombre, dia, costo, lugar, horario, estado) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(query, [nombre, dia, costo, lugar, horario, estado], (error, result) => {
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
const db = require ('../config/db');
const eventos = {
getALL : (callback) => {
        const query = 'SELECT * FROM EVENTO';
        db.query (query, (error, results) => {
            if (error){
                return callback (error, null);
            }
            return callback (null, results);
        });
    }
};
module.exports = eventos;

//modelo agregar eventos
const addEventos = (nombre, fecha, costo, lugar, hora, callback) => {
    const query = 'INSERT INTO EVENTO (nombre, fecha, costo, lugar, hora) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [nombre, fecha, costo, lugar, hora], (error, result) => {
        if (error) {
            return callback(error, null);
        }
        return callback(null, result);
    });
};
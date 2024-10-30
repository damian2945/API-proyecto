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
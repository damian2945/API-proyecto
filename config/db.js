const mysql = require('mysql2');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'EVENTOS'
});
conexion.connect((error) => {
    if (error) {
        console.error('El error de conexión es: ' + error);
        return;
    }
    console.log('¡Conectado a la base de datos MySQL!');
});
module.exports = conexion;

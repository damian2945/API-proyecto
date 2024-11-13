const express = require('express');
const conexion = require('./config/db');

const app = express();
const rutaEventos = require('./routes/rutaEventos.js');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.use('/api', rutaEventos);
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})

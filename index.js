const express = require('express');
const conexion = require('./config/db');

const app = express();
const rutaEventos = require('./routes/rutaEventos.js');

app.use('/api', rutaEventos);
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})

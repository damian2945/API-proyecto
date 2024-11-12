
const express = require('express');
const router = express.Router();
const controlEventos = require('../controllers/controlEventos.');


// Ruta para obtener todos los estudiantes
router.get('/api/eventos',controlEventos.getAllEvento);

// Ruta para agregar un nuevo estudiante
router.post('/api/agregar', controlEventos.addEvento);

// Ruta para eliminar un estudiante
router.delete('/api/borrar', controlEventos.deleteEvento);


module.exports = router;

const express = require('express');
const router = express.Router();
const controlEventos = require('../controllers/controlEventos.js');


// Ruta para obtener todos los estudiantes
router.get('/eventos', () => controlEventos.getAllEvento());

router.get('/evento/:id',()=> controlEventos.getEvento());

// Ruta para agregar un nuevo estudiante
router.post('/agregar', ()=> controlEventos.addEvento());

// Ruta para eliminar un estudiante
router.delete('/borrar',()=>  controlEventos.deleteEvento() );
router.post('/cambiar',()=> controlEventos.cambioEvento());


module.exports = router;
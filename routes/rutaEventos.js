const express = require('express');
const router = express.Router();
const { getAllEvento, addEvento, deleteEvento, cambioEvento, getEvento } = require('../controllers/controlEventos.js');

router.get('/eventos', (req, res) => getAllEvento(req, res));
router.get('/evento/:id', (req, res) => getEvento(req, res));
router.post('/agregar', (req, res) => addEvento(req, res));
router.post('/borrar', (req, res) => deleteEvento(req, res));
router.post('/cambiar', (req, res) => cambioEvento(req, res));  

module.exports = router;

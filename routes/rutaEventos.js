const express = require('express');
const router = express.Router();
const { getAllEvento, addEvento, deleteEvento } = require('../controllers/controlEventos.js');

router.get('/eventos', (req, res) => getAllEvento(req, res));
router.post('/agregar', (req, res) => {
    addEvento(req, res)
    });
router.delete('/borrar', (req, res) => deleteEvento(req, res)); 

module.exports = router;

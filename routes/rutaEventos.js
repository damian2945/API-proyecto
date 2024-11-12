const express = require('express');
const router = express.Router();
const controlEventos = require('../controllers/controlEventos.js');

router.get('/eventos', controlEventos.getEvento);
router.post('/agregar', controlEventos.addEvento);

module.exports = router;

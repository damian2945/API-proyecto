const express = require('express');
const router = express.Router();
const controlEventos = require('../controllers/controlEventos.js');

router.get('/eventos', controlEventos.getEventos);
router.post('/agregar', controlEventos.addEventos);

module.exports = router;

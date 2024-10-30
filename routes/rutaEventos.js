const express = require('express');
const router = express.Router();
const controlEventos = require('../controllers/controlEventos.js');

router.get('/eventos', controlEventos.getEventos);

module.exports = router;

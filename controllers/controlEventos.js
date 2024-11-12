const evento = require('../models/eventos.js');



// Obtener todos los estudiantes
exports.getAllEventos = (req, res) => {
  evento.getAllEventos((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};


// Agregar un nuevo estudiante
exports.addEvento = (req, res) => {
  const newevento = req.body;
  evento.addEvento(newevento, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'evento agregado', id: result.insertId });
  });
};


// Eliminar estudiante
exports.deleteEvento = (req, res) => {
  const { id } = req.params;
  evento.deleteEvento(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Evento eliminado' });
  });
};
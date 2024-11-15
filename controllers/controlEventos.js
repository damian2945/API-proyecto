const evento = require('../models/eventos.js');



// Obtener todos los eventos
exports.getAllEvento = (req, res) => {
  evento.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
    //acepatar cors
  });
};


// Agregar un nuevo evento
exports.addEvento = (req, res) => {
  const { dia, nombre, horario, costo, lugar } = req.body;

  evento.addEvento(nombre, dia, costo, lugar, horario, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'evento agregado', id: result.insertId });
  });
};


// Eliminar evento
exports.deleteEvento = (req, res) => {
  const { id_evento } = req.body;
  evento.deleteEvento(id_evento, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Evento eliminado' });
  });
};
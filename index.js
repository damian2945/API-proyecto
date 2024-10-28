const express = require('express');
const app = express();

app.use (express.json());

const eventos = [
    {id:1,
        nombre:"'natacion",
        imagen: "",
        fecha: "2021-10-10",
        lugar: "alberca olimpica",
        cupo: 100,
        hora: "10:30 pm",
        activo: true,
    },
    {
        id:2,
        nombre:"'carrera",
        imagen: "",
        fecha: "2021-10-10",
        lugar: "pista de atletismo",
        cupo: 100,
        hora: "11:30 pm",
        activo: true,
    },
    {
        id:3,
        nombre:"'ciclismo",
        imagen: "",
        fecha: "2021-10-10",
        lugar: "pista de ciclismo",
        cupo: 100,
        hora: "10:30 am",
        activo: true,
    },
    {
        id:4,
        nombre:"'futbol",
        imagen: "",
        fecha: "2021-10-10",
        lugar: "cancha de futbol",
        cupo: 50,
        hora: "1:30 pm",
        activo: true,
    },
    {
        id:5,
        nombre:"'basquetbol",
        imagen: "",
        fecha: "2021-10-10",
        lugar: "cancha de basquetbol",
        cupo: 30,
        hora: "10:30 am",
        activo: true,
    },
    {
        id:6,
        nombre:"'voleibol",
        imagen: "",
        fecha: "2021-10-10",
        lugar: "cancha de voleibol",
        cupo: 150,
        hora: "10:30 pm",
        activo: true,
    },
    {
        id:7,
        nombre:"'beisbol",
        imagen: "",
        fecha: "2021-10-10",
        lugar: "cancha de beisbol",
        cupo: 70,
        hora: "6:30 pm",
        activo: true,
    },
    {
        id:8,
        nombre:"'tenis",
        imagen: "",
        fecha: "2021-10-10",
        lugar: "cancha de tenis",
        cupo: 40,
        hora: "4:50 pm",
        activo: true,
    },
    {
        id:9,
        nombre:"'ping pong",
        imagen: "",
        fecha: "2021-10-10",
        lugar: "mesa de ping pong",
        cupo: 50,
        hora: "8:45 am",
        activo: true
    },
    {
        id:10,
        nombre:"'box",
        imagen: "",
        fecha: "2021-10-10",
        lugar: "ginmasio olimpico",
        cupo: 50,
        hora: "10:30 pm",
        activo: true,
    },
    {
        id:11,
        nombre:"'karate",
        imagen: "",
        fecha: "2021-10-10",
        lugar: "dojo",
        cupo: 50,
        hora: "10:30 pm",
        activo: true,
    },
    {
        id:12,
        nombre:"'taekwondo",
        imagen: "",
        fecha: "2021-10-10",
        lugar: "dojo",
        cupo: 50,
        hora: "10:30 pm",
        activo: true,
    },
    {
        id:13,
        nombre:"'lucha libre",
        imagen: "",
        fecha: "2021-10-10",
        lugar: "ring",
        cupo: 3033,
        hora: "10:30 pm",
        activo: true,
    },
    {
        id:14,
        nombre:"'gimnasia",
        imagen: "",
        fecha: "2021-10-10",
        lugar: "gimnasio",
        cupo: 50,
        hora: "10:30 pm",
        activo: true,
    },

];

app.get('/', (req, res) => {
    res.send('Hola mundo desde express');
});

app.get('/api/eventos', (req, res) => {
    res.send(eventos);
});

app.get('/api/eventos/:nombre', (req, res) => {
    const evento = eventos.find(c => c.nombre === req.params.nombre);
    if (!evento) return  res.status(404).send('El evento no fue encontrado');
    else res.send(evento);
});

app.post('/api/eventos', (req, res) => {
    const evento = {
        id: eventos.length + 1,
        nombre: req.body.nombre,
        imagen: req.body.imagen,
        fecha: req.body.fecha,
        lugar: req.body.lugar,
        cupo: req.body.cupo,
        hora: req.body.hora,
        activo: req.body.activo
    };
    eventos.push(evento);
    res.send(evento);
});

app.delete('/api/eventos/:nombre', (req, res) => {
    const evento = eventos.find(c => c.nombre === req.params.nombre);
    if (!evento) return res.status(404).send('El evento no fue encontrado');
    const index = eventos.indexOf(evento);
    eventos.splice(index, 1);
    res.send(evento);
});

const port = process.env.port || 30;
app.listen(port, () => console.log(`escuchando en el puerto ${port}`));

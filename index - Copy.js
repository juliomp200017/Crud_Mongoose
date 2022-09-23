const express = require('express');
const app = express();
const mongoose = require('mongoose');

// MIDDLEWARE JSON
app.use(express.json());

// CONEXION MONGO
mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.7uf1mex.mongodb.net/test-db?retryWrites=true&w=majority"
    )
.then(() => {
    console.log("Exito");
})
.catch((e) => {
    console.log(e)
    console.log("Jumbo")
})

// DECLARACION DE RUTA
const route1 = require('./route1')
app.use("/cliente", route1)

const route2 = require('./route2')
app.use("/mascota", route2)

const route3 = require('./route3')
app.use("/veterinario", route3)

const route4 = require('./route4')
app.use("/cita", route4)

// ABRIR PUERTO PARA APP
app.listen(3000, () => console.log("Hola"));

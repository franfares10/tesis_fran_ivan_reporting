let mongoose = require('mongoose');

let MarcasSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    emailEncargado: String
})

let Marcas = mongoose.model('marcas', MarcasSchema, 'marcas');

module.exports = Marcas;
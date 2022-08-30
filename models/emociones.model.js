let mongoose = require("mongoose")

let EmocionesSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    categoria: [String] //Por si pertenece a una categoria o no.
})

let Emociones = mongoose.model("emociones",EmocionesSchema,"emociones")

module.exports = Emociones
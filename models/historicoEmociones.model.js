let mongoose = require("mongoose")
let {Prendas} = require("prendas.model.js")
let {CentroComercial} = require("centroComercial.model.js")
let {Emociones} = require("emociones.model.js")




let HistoricoEmocionesSchema = new mongoose.Schema({
    prenda: Prendas,
    centroComercial: CentroComercial,
    emocion: Emociones,
    fecha: Date

})

let HistoricoEmociones = mongoose.model("historicoEmociones",HistoricoEmocionesSchema,"historicoEmociones")

module.exports = HistoricoEmociones
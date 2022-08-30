let mongoose = require("mongoose")
let MarcaSchema = require("marcas.model.js")

let PrendasSchema = new mongoose.Schema({
    marca: MarcaSchema,
    descripcion: String,
    precio: Number,

})

let Prendas = mongoose.model("prendas",PrendasSchema,"prendas")

module.exports = Prendas
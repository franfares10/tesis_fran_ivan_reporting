let mongoose = require("mongoose")


let PrendasSchema = new mongoose.Schema({
    marca: Object,
    descripcion: String,
    precio: Number,

})

let Prendas = mongoose.model("prendas",PrendasSchema,"prendas")

module.exports = Prendas
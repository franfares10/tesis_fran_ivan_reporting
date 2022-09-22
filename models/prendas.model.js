let mongoose = require("mongoose")


let PrendasSchema = new mongoose.Schema({
    marca: Object,
    descripcion: String,
    tipo: String,
    precio: Number,
    img_url: String

})

let Prendas = mongoose.model("prendas",PrendasSchema,"prendas")

module.exports = Prendas
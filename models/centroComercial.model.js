let mongoose = require("mongoose");
let MarcasAsociadas = require("marcas.model.js");

let CentroComercialSchema = new mongoose.Schema({
  nombre: String,
  marcasAsociadas: [MarcasAsociadas],
  ubicacion: String,
});

let CentroComercial = mongoose.model(
  "centrosComerciales",
  CentroComercialSchema,
  "centrosComerciales"
);

module.exports = CentroComercial;

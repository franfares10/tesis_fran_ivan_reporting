let mongoose = require("mongoose");

let CentroComercialSchema = new mongoose.Schema({
  nombre: String,
  marcasAsociadas: [Object],
  ubicacion: String,
});

let CentroComercial = mongoose.model(
  "centrosComerciales",
  CentroComercialSchema,
  "centrosComerciales"
);

module.exports = CentroComercial;

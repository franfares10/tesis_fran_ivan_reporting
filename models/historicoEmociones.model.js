let mongoose = require("mongoose");

let HistoricoEmocionesSchema = new mongoose.Schema({
  prenda: Object,
  centroComercial: Object,
  emocion: Object,
  fecha: Date,
});

let HistoricoEmociones = mongoose.model(
  "historicoEmociones",
  HistoricoEmocionesSchema,
  "historicoEmociones"
);

module.exports = HistoricoEmociones;

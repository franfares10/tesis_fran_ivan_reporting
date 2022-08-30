let HistoricoEmociones = require("../models/historicoEmociones.model");

const postHistoricoEmocion = async function (historicoEmocion) {
  try {
    const { prenda, centroComercial, emocion } = historicoEmocion;
    let newHistoricoEmocion = new HistoricoEmociones(
      prenda,
      centroComercial,
      emocion
    );
    return await newHistoricoEmocion.save();
  } catch (error) {
    console.error(
      "XX. Error guardando en Historico_Emocion, " + error.getMessage()
    );
  }
};

const getHistoricoEmocion = async function (idHistoricoEmocion) {
  try {
    return await HistoricoEmociones.findById(idHistoricoEmocion)
  } catch (error) {
    console.error(
      "XX. Error buscando en Historico_Emocion, " + error.getMessage()
    );
  }
};

module.exports = {
  postHistoricoEmocion,
  getHistoricoEmocion
};

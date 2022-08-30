let Emociones = require("../models/emociones.model");

const getEmocionById = async function (idHistoricoEmocion) {
  try {
    return await Emociones.findById(idHistoricoEmocion);
  } catch (error) {
    console.error(
      "XX. Error guardando en Historico_Emocion, " + error.getMessage()
    );
  }
};

module.exports = {
  postHistoricoEmocion,
};

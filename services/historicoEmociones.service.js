let HistoricoEmociones = require("../models/historicoEmociones.model")


const postHistoricoEmocion = async function (historicoEmocion) {
  try{
    let newHistoricoEmocion = HistoricoEmociones(historicoEmocion)
    return await newHistoricoEmocion.save();
  }catch(error){
    console.error("XX. Error guardando en Historico_Emocion, "+error.getMessage())
  }
};

module.exports = {
  postHistoricoEmocion,
};

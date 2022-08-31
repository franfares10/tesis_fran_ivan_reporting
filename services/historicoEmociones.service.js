let HistoricoEmociones = require("../models/historicoEmociones.model");

const postHistoricoEmocion = async function (
  prendaObtenida,
  centroObtenido,
  emocionObtenida,
  fecha
) {
  try {
    const historicoEmocion = {
      prenda: prendaObtenida,
      centroComercial: centroObtenido,
      emocion: emocionObtenida,
      fecha,
    };
    let newHistoricoEmocion = new HistoricoEmociones(historicoEmocion);
    return await newHistoricoEmocion.save();
  } catch (error) {
    console.error(
      "XX. Error guardando en Historico_Emocion, " + error.getMessage()
    );
  }
};

const getHistoricoEmocion = async function (idHistoricoEmocion) {
  try {
    return await HistoricoEmociones.findById(idHistoricoEmocion);
  } catch (error) {
    console.error(
      "XX. Error buscando en Historico_Emocion, " + error.getMessage()
    );
  }
};

const getHistoricoPorMarca = async function (marcaDeseada){
  try{
    return await HistoricoEmociones.find({prenda:{marca:marcaDeseada}})
  }catch(e){
    console.log(e)
    throw new Error("XX. Error retornando todas las posibles marcas")
  }
}

module.exports = {
  postHistoricoEmocion,
  getHistoricoEmocion,
  getHistoricoPorMarca
};

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
const postEmociones = async function(nombre,descripcion){
  try{
    let EmocionNueva = new Emociones(nombre,descripcion)
    return await EmocionNueva.save()
  }catch(e){
    console.error("XX. Error posteando en Centro Comercial")
  }

}
module.exports = {
  getEmocionById,
  postEmociones
};

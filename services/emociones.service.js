let Emociones = require("../models/emociones.model");

const getEmocionById = async function (idEmocion) {
  try {
    return await Emociones.findById(idEmocion);
  } catch (error) {
    throw new Error("XX. Error buscando emociones");
}
};

const postEmociones = async function(body){
  try{
    let EmocionNueva = new Emociones(body)
    return await EmocionNueva.save()
  }catch(e){
    console.log(e)
    console.error("XX. Error posteando en Emociones")
  }

}
module.exports = {
  getEmocionById,
  postEmociones
};

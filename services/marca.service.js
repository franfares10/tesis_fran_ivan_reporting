let MarcaModelo = require("../models/marcas.model")


const getMarcaModelo = async function (idMarcaModelo) {
  try{
    return await MarcaModelo.findById(idMarcaModelo)
  }catch(error){
    console.error("XX. Error buscando id en Marcas, "+error.getMessage())
  }
};

const postMarcaModelo = async function(body){
  try{
    let MarcaNueva = new MarcaModelo(body)
    return await MarcaNueva.save();
  }catch(e){
    console.error("XX. Error guardando la Marca")
  }
}

module.exports = {
  getMarcaModelo,
  postMarcaModelo
};
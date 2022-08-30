let MarcaModelo = require("../models/marcas.model")


const getMarcaModelo = async function (idMarcaModelo) {
  try{
    return await MarcaModelo.findById(idMarcaModelo)
  }catch(error){
    console.error("XX. Error buscando id en Marcas, "+error.getMessage())
  }
};

const postMarcaModelo = async function(nombre,descripcion){
  try{
    let MarcaNueva = new MarcaModelo(nombre,descripcion)
    return await MarcaNueva.save();
  }catch(e){
    console.error("XX. Error guardando la Marca"+e.getMessage())
  }
}

module.exports = {
  getMarcaModelo,
  postMarcaModelo
};
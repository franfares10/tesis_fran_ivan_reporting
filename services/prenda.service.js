let PrendaModelo = require("../models/centroComercial.model")


const getIdPrendaModelo = async function (idPrendaModelo) {
  try{
    return await PrendaModelo.findById(idPrendaModelo)
  }catch(error){
    console.error("XX. Error buscando id en Prendas, "+error.getMessage())
  }
};

const postPrenda = async function(marca,descripcion,precio){
  try{
    let NuevaPrenda = new PrendaModelo(marca,descripcion,precio)
    return await NuevaPrenda.save();
  }catch(e){
    console.error("XX. Error guardando la prenda"+e.getMessage())
  }
}

module.exports = {
  getIdPrendaModelo,
  postPrenda
};

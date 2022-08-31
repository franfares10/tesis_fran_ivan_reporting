let PrendaModelo = require("../models/prendas.model")


const getIdPrendaModelo = async function (idPrendaModelo) {
  try{
    return await PrendaModelo.findById(idPrendaModelo,'-_id -__v')
  }catch(error){
    console.error("XX. Error buscando id en Prendas")
  }
};

const postPrenda = async function(prendaModelo){
  try{
    let NuevaPrenda = new PrendaModelo(prendaModelo) 
    return await NuevaPrenda.save();
  }catch(e){
    console.log(e)
    throw new Error("XX. Error guardando la prenda")
  }
}

module.exports = {
  getIdPrendaModelo,
  postPrenda
};

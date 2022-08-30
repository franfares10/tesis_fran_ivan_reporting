let CentroComercial = require("../models/centroComercial.model")


const getCentroComercialById = async function (idCentroComercial) {
  try{
    return await CentroComercial.findById(idCentroComercial)
  }catch(error){
    console.error("XX. Error buscando id en Centros Comerciales, "+error.getMessage())
  }
};

module.exports = {
  getCentroComercialById,
};

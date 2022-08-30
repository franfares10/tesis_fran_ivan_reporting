let CentroComercial = require("../models/centroComercial.model")


const getCentroComercialById = async function (idCentroComercial) {
  try{
    return await CentroComercial.findById(idCentroComercial)
  }catch(error){
    console.error("XX. Error buscando id en Centros Comerciales, "+error.getMessage())
  }
};

const postCentroComercial = async function(nombre,descripcion){
  try{
    let CentroComercialNuevo = new CentroComercial(nombre,descripcion)
    return await CentroComercialNuevo.save()
  }catch(e){
    console.error("XX. Error posteando en Centro Comercial")
  }

}

module.exports = {
  getCentroComercialById,
  postCentroComercial
};

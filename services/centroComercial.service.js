let CentroComercial = require("../models/centroComercial.model")


const getCentroComercialById = async function (idCentroComercial) {
  try{
    return await CentroComercial.findById(idCentroComercial,'-_id -__v')
  }catch(error){
    console.error("XX. Error buscando id en Centros Comerciales")
  }
};

const postCentroComercial = async function(body){
  try{
    let CentroComercialNuevo = new CentroComercial(body)
    return await CentroComercialNuevo.save()
  }catch(e){
    console.error("XX. Error posteando en Centro Comercial")
  }

}

module.exports = {
  getCentroComercialById,
  postCentroComercial
};

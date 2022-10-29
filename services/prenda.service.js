let PrendaModelo = require("../models/prendas.model");

const getIdPrendaModelo = async function (idPrendaModelo) {
  try {
    return await PrendaModelo.findById(idPrendaModelo, "-_id -__v");
  } catch (error) {
    console.error("XX. Error buscando id en Prendas" + error);
  }
};

const postPrenda = async function (prendaModelo) {
  try {
    let NuevaPrenda = new PrendaModelo(prendaModelo);
    return await NuevaPrenda.save();
  } catch (e) {
    console.log(e);
    throw new Error("XX. Error guardando la prenda");
  }
};

const getPrendaByTipo = async function (tipo) {
  try {
    return await PrendaModelo.find({ tipo });
  } catch (error) {
    console.error("Error al traer prendas por tipo " + error);
  }
};

const getPrendaByTipoAndGenero = async function (tipo, genero) {
  try {
    return await PrendaModelo.find({ tipo, genero });
  } catch (error) {
    console.error("Error al traer prendas por tipo " + error);
  }
};

module.exports = {
  getIdPrendaModelo,
  postPrenda,
  getPrendaByTipo,
  getPrendaByTipoAndGenero
};

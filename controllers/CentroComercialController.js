const CentroComercialService = require("../services/centroComercial.service");

const postCentroComercial = async function (req, res) {
  const { descripcion, nombre } = req.body;

  try {
    await CentroComercialService.postCentroComercial(nombre, descripcion);
    return res.status(201).json({
      message: "Registro creado correctamente",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error.",
    });
  }
};
const getCentroComercialById = async function (req, res) {
    const { id } = req.body;
  
    try {
      let CentroComercialObtenido = await CentroComercialService.getCentroComercialById(id);
      return res.status(200).json({
        CentroComercialObtenido
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        status: 500,
        message: "Internal Server Error.",
      });
    }
  };
module.exports = {
  postCentroComercial,
  getCentroComercialById
};

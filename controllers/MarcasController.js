const MarcasService = require("../services/marca.service")

const postMarcas = async function (req, res) {
  try {
    await MarcasService.postMarcaModelo(req.body);
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

const getMarcasById = async function (req, res) {
    const { id } = req.params;
  
    try {
      let MarcaObtenida = await MarcasService.getMarcaModelo(id);
      return res.status(200).json({
        MarcaObtenida
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
  postMarcas,
  getMarcasById
};
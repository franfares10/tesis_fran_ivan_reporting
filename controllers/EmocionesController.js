const EmocionesService = require("../services/emociones.service");

const postEmociones = async function (req, res) {
  const { nombre, descripcion } = req.body;

  try {
    await EmocionesService.postEmociones(nombre, descripcion);
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

const getEmocionById = async function (req, res) {
  const { id } = req.body;
  try {
    let EmocionObtenida = await EmocionesService.getEmocionById(id);
    return res.status(200).json({
      EmocionObtenida,
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
  postEmociones,
  getEmocionById,
};

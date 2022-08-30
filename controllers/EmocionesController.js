const EmocionesService = require("../services/emociones.service");

const postEmociones = async function (req, res) {
  try {
    await EmocionesService.postEmociones(req.body);
    return res.status(201).json({
      message: "Registro creado correctamente",
    });
  } catch (err) { 
    console.log("Rompio");
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error.",
    });
  }
};

const getEmocionById = async function (req, res) {
  const { id } = req.body;
  try {
    console.log("XX. Yendo a buscar con id: "+id)
    let EmocionObtenida = await EmocionesService.getEmocionById(id);
    return res.status(200).json({
      EmocionObtenida,
    });
  } catch (err) {
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

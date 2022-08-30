const HistoricoEmocionesService = require("../services/historicoEmociones.service");
const CentroComercialService = require("../services/centroComercial.service");
const EmocionService = require("../services/emociones.service");
const PrendaService = require("../services/prenda.service");
const HistoricoEmociones = require("../models/historicoEmociones.model");

const postHistoricoEmociones = async function (req, res) {
  const { prenda, emocion, centro, fecha } = req.body;

  try {
    //Buscar prenda por id
    const prendaObtenida = await PrendaService.getIdPrendaModelo(prenda);
    //Buscar emocion por id
    const emocionObtenida = await EmocionService.getEmocionById(emocion);
    //Buscar centroComercial por id
    const centroComercial = await CentroComercialService.getCentroComercialById(
      centro
    );
    HistoricoEmocionesService.postHistoricoEmocion(prendaObtenida,emocionObtenida,centroComercial)

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


module.exports = {
  postHistoricoEmociones
};

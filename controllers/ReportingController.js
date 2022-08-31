const HistoricoEmocionesService = require("../services/historicoEmociones.service");
const CentroComercialService = require("../services/centroComercial.service");
const EmocionService = require("../services/emociones.service");
const PrendaService = require("../services/prenda.service");
const HistoricoEmociones = require("../models/historicoEmociones.model");

const postHistoricoEmociones = async function (req, res) {
  const { prenda, emocion, centro } = req.body;

  try {
    //Buscar prenda por id
    const prendaObtenida = await PrendaService.getIdPrendaModelo(prenda);

    //Buscar emocion por id
    const emocionObtenida = await EmocionService.getEmocionById(emocion);

    //Buscar centroComercial por id
    const centroComercial = await CentroComercialService.getCentroComercialById(
      centro
    );
    HistoricoEmocionesService.postHistoricoEmocion(
      prendaObtenida,
      emocionObtenida,
      centroComercial,
      Date.now()
    );

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

/*const scheduledGenerateReport = nodeSchedule.scheduleJob('',function generateReport(){
  //COMPLETAR CUANDO YA SEPA COMO SE HACE
})*/

const preProcesarDatosReportes = async function (
  marcaParametro,
  fechaInicio,
  fechaFin
) {
  try {
    //Busco las prendas de la marca, que estén entre los rangos de fechas
    const datosHistoricos = await HistoricoEmociones.find({
      prenda: {
        marca: marcaParametro,
      },
      fecha: { $gt: fechaInicio, $lt: fechaFin },
    });
    let emocionesPorPrenda = [];
    datosHistoricos.forEach((historicoEmocion) => {
      //HistoricoEmocion
    });
  } catch (e) {}
};

const getHistoricoPorMarca = async function (req, res) {
  try{
    return await HistoricoEmocionesService.getHistoricoPorMarca(req.body.marca)
  }catch(e){
    console.log(e)
  }
};

module.exports = {
  postHistoricoEmociones,
  getHistoricoPorMarca
};

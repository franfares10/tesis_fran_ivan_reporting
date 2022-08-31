const HistoricoEmocionesService = require("../services/historicoEmociones.service");
const CentroComercialService = require("../services/centroComercial.service");
const EmocionService = require("../services/emociones.service");
const PrendaService = require("../services/prenda.service");
const HistoricoEmociones = require("../models/historicoEmociones.model");
const { generateReport } = require("./ExcelReportsControlller");

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

const getHistoricoPorMarca = async function (req, res) {
  const { marca } = req.params;
  try {
    let result = await HistoricoEmocionesService.getHistoricoPorMarca(marca);
    return res.status(200).json({
      result,
    });
  } catch (e) {
    console.log(e);
  }
};

const getHistoricoEmociones = async function (req, res) {
  try {
    console.log("Llegó");
    let result = await HistoricoEmocionesService.getHistoricoTotales();
    return res.status(200).json({ result });
  } catch (e) {
    return res
      .status(500)
      .json({ message: "Error fetching historico emociones" });
  }
};

const preProcesarDatosReportes = async function (
  req,res
) {
  try {
    //Busco las prendas de la marca, que estén entre los rangos de fechas
    const datosHistoricos = await HistoricoEmocionesService.getHistoricoPorMarca("Kevingston")
    //Falta lo de la fecha
    let { brandWorkbook, literalTitulo } = await generateReport();
    let worksheet = brandWorkbook.getWorksheet(literalTitulo);
    worksheet.columns = [
      { header: "Prenda", key: "Prenda", width: "20" },
      { header: "Marca", key: "Marca", width: "20" },
      { header: "Emocion", key: "Emocion", width: "20" },
      { header: "Centro Comercial", key: "Centro Comercial", width: "20" },
    ];
    //Prenda-Marca-Emocion-Centro Comercial
    let indice = 1;
    datosHistoricos.forEach((historicoEmocion) => {
      //Escribo todo directo en el excel, convierto de json a csv para tener las cosas más facil.
      worksheet.insertRow(indice, [
        historicoEmocion.prenda.descripcion,
        historicoEmocion.prenda.marca.nombre,
        historicoEmocion.emocion.nombre,
        historicoEmocion.centroComercial.nombre
      ]);
      indice++;
    });
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" +"tutorial.xlsx"
    );
    return brandWorkbook.xlsx.write(res).then(function () {
      res.status(200).end();
    }); 
  } catch (e) {
    console.log(e)
  }
};

module.exports = {
  postHistoricoEmociones,
  getHistoricoPorMarca,
  getHistoricoEmociones,
  preProcesarDatosReportes
};

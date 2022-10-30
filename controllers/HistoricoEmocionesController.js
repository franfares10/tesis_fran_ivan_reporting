const HistoricoEmocionesService = require("../services/historicoEmociones.service");
const CentroComercialService = require("../services/centroComercial.service");
const EmocionService = require("../services/emociones.service");
const PrendaService = require("../services/prenda.service");
const HistoricoEmociones = require("../models/historicoEmociones.model");
const { generateReport } = require("./ExcelReportsControlller");
const Excel = require("exceljs");
const MailService = require("../services/mailService");

const postHistoricoEmociones = async function (req, res) {
  const { prenda, emocion, centro, genero } = req.body;

  try {
    //Buscar prenda por id
    const prendaObtenida = await PrendaService.getIdPrendaModelo(prenda);

    //Buscar emocion por id
    //const emocionObtenida = await EmocionService.getEmocionById(emocion);

    //Buscar centroComercial por id
    const centroComercial = await CentroComercialService.getCentroComercialById(
      centro
    );
    HistoricoEmocionesService.postHistoricoEmocion(
      prendaObtenida,
      emocion,
      centroComercial,
      Date.now(),
      genero
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

const createReport = async function (req, res) {
  const { marca } = req.params;

  try {
    const historicoDeMarca =
      await HistoricoEmocionesService.getHistoricoPorMarca(marca);
    const mailResponsable = historicoDeMarca[0].prenda.marca.mail;
    const filename = "MonthlyReport.xlsx";
    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet("Dressy Monthly Report");

    if (historicoDeMarca.length > 0) {
      worksheet.columns = [
        { header: "Prenda", key: "Prenda", width: "20" },
        { header: "Marca", key: "Marca", width: "20" },
        { header: "Emocion", key: "Emocion", width: "20" },
        { header: "Centro Comercial", key: "Centro Comercial", width: "20" },
      ];

      historicoDeMarca.forEach((registroDeEmocion) => {
        worksheet.addRow([
          registroDeEmocion.prenda.descripcion,
          registroDeEmocion.prenda.marca.nombre,
          registroDeEmocion.emocion,
          registroDeEmocion.centroComercial.nombre,
        ]);
      });

      const buffer = await workbook.xlsx.writeBuffer();

      await MailService.mandarMail(buffer, filename, mailResponsable);
    }

    return res.status(200).json({ message: "Mail enviado correctamente" });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Ocurrio un error mandando el mail" });
  }
};

module.exports = {
  postHistoricoEmociones,
  getHistoricoPorMarca,
  getHistoricoEmociones,
  createReport,
};

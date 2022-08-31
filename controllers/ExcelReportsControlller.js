const nodeExcel = require("exceljs");
const { months, parameterizedTime } = require("../utils/utils");

const generateReport = async function () {
  //Creo workbook
  const brandWorkbook = new nodeExcel.Workbook();
  let date = new Date();

  //Asigno configuracion
  brandWorkbook.creator = "Dressy Inc.";
  brandWorkbook.lastModifiedBy = "Dressy Inc";

  //Creo la worksheet correspondiente.
  const literalTitulo =
    "Reporte " + months[date.getMonth()] + " del " + date.getFullYear();
  brandWorkbook.addWorksheet(literalTitulo);

  //Prenda Emocion Centro Comercial, agrupo por Prenda.
  return { brandWorkbook, literalTitulo };
};

module.exports = { generateReport };

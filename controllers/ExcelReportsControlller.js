const nodeExcel = require("exceljs")
const {months,parameterizedTime} = require("../utils/utils")

const generateReport = async function (brand, config) {
    //Creo workbook
    const brandWorkbook = new nodeExcel.Workbook();
    let date = new Date();
    
    //Asigno configuracion
    brandWorkbook.creator("Dressy Inc.")
    brandWorkbook.lastModifiedBy("Dressy Inc")
    
    //Creo la worksheet correspondiente.
    brandWorkbook.addWorksheet("Reporte: "+months[date.getMonth()]+" del "+date.getFullYear())

    //Prenda Emocion Centro Comercial, agrupo por Prenda.

};

const PrendaService = require("../services/prenda.service")

const postPrendas = async function (req, res) {
  try {
    await PrendaService.postPrenda(req.body);
    return res.status(201).json({
      message: "Registro creado correctamente",
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error.",
    });
  }
};

const getPrendas = async function (req, res) {
    const { id } = req.params;
    try {
      let PrendaObtenida = await PrendaService.getIdPrendaModelo(id);
      return res.status(200).json({
        PrendaObtenida
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        status: 500,
        message: "Internal Server Error.",
      });
    }
  };
  
const getPrendasByTipo = async function (req,res){
  const {tipo} = req.params;
  try{
    let listaPrendas = await PrendaService.getPrendaByTipo(tipo);
    return res.status(200).json({
      listaPrendas
    });
  }catch(error){
    return res.status(500).json({
      status: 500,
      message: "Internal Server Erorr"
    });
  }
}

module.exports = {
  postPrendas,
  getPrendas,
  getPrendasByTipo
};

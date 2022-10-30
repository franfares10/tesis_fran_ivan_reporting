const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validator");
const {
  postHistoricoEmociones,
  getHistoricoPorMarca,
  getHistoricoEmociones,
  createReport
} = require("../controllers/HistoricoEmocionesController");
const router = Router();

router.get(
  "/totales/:marca",
  getHistoricoPorMarca
);

router.get(
  "/totales",
  getHistoricoEmociones
);

router.post(
  "/",
  [
    check("prenda").not().isEmpty(),
    check("centro").not().isEmpty(),
    check("emocion").not().isEmpty(),
    check("genero").not().isEmpty(),
    validarCampos,
  ],
  postHistoricoEmociones
);

router.post("/reporte/:marca",createReport)

module.exports = router;

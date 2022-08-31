const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validator");
const {
  postHistoricoEmociones,
  getHistoricoPorMarca,
  getHistoricoEmociones,
  preProcesarDatosReportes
} = require("../controllers/ReportingController");
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
    validarCampos,
  ],
  postHistoricoEmociones
);

router.get("/reporte/:marca",preProcesarDatosReportes)

module.exports = router;

const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validator");
const {
  postHistoricoEmocion,
  getHistoricoPorMarca,
  getHistoricoEmocion,
} = require("../services/historicoEmociones.service");
const router = Router();

router.get(
  "/marca/historico",
  [check("marca").not().isEmpty(), validarCampos],
  getHistoricoPorMarca
);
router.get(
  "/marca/",
  [check("marca").not().isEmpty(), validarCampos],
  getHistoricoEmocion
);

router.post(
  "/",
  [
    check("prenda").not().isEmpty(),
    check("centroComercial").not().isEmpty(),
    check("emocion").not().isEmpty(),
    validarCampos,
  ],
  postHistoricoEmocion
);
module.exports = router;

const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validator");
const {postHistoricoEmocion} = require("../services/historicoEmociones.service")
const router = Router();


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
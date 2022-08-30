const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validator");
const {getMarcaModelo,postMarcaModelo} = require("../services/marca.service")
const router = Router();


router.post(
  "/",
  [
    check("nombre").not().isEmpty(),
    check("descripcion").not().isEmpty(),
    validarCampos,
  ],
  postMarcaModelo
);

router.get(
    "/marcas",
    [
      check("id").not().isEmpty(),
      validarCampos,
    ],
    getMarcaModelo
  );

module.exports = router;
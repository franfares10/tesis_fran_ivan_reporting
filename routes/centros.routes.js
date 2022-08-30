const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validator");
const {getCentroComercialById,postCentroComercial} = require("../services/centroComercial.service")
const router = Router();


router.post(
  "/",
  [
    check("nombre").not().isEmpty(),
    check("descripcion").not().isEmpty(),
    validarCampos,
  ],
  postCentroComercial
);

router.get(
    "/centros",
    [
      check("id").not().isEmpty(),
      validarCampos,
    ],
    getCentroComercialById
  );

module.exports = router;
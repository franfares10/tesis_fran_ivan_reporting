const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validator");
const {getIdPrendaModelo,postPrenda} = require("../services/prenda.service")
const router = Router();


router.post(
  "/",
  [
    check("marca").not().isEmpty(),
    check("descripcion").not().isEmpty(),
    check("precio").not().isEmpty(),
    validarCampos,
  ],
  postPrenda
);

router.get(
    "/prendas",
    [
      check("id").not().isEmpty(),
      validarCampos,
    ],
    getIdPrendaModelo
  );

module.exports = router;
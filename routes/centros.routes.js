const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validator");
const {getCentroComercialById,postCentroComercial} = require("../controllers/CentroComercialController")
const router = Router();


router.post(
  "/",
  [
    check("nombre").not().isEmpty(),
    check("ubicacion").not().isEmpty(),
    check("marcasAsociadas").not().isEmpty(), //El marcas asociadas las cree yo fran, si ves que no te cierra sacalo amigo, era para escalar la reportería
    validarCampos,
  ],
  postCentroComercial
);

router.get(
    "/centros/:id",
    [
      check("id").not().isEmpty(),
      validarCampos,
    ],
    getCentroComercialById
  );

module.exports = router;
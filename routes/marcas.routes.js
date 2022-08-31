const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validator");
const {getMarcasById,postMarcas} = require("../controllers/MarcasController")
const router = Router();


router.post(
  "/",
  [
    check("nombre").not().isEmpty(),
    check("descripcion").not().isEmpty(),
    check("emailEncargado").not().isEmpty(),
    validarCampos,
  ],
  postMarcas
);

router.get(
    "/marcas/:id",
    getMarcasById
  );

module.exports = router;
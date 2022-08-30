const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validator");
const {getEmocionById,postEmociones} = require("../controllers/EmocionesController")
const router = Router();


router.post(
  "/",
  [
    check("nombre").not().isEmpty(),
    check("descripcion").not().isEmpty(),
    validarCampos,
  ],
  postEmociones
);

router.get(
    "/emociones",
    [
      check("id").not().isEmpty(),
      validarCampos,
    ],
    getEmocionById
  );

module.exports = router;
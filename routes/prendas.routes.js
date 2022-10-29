const { Router } = require("express");
const { check } = require("express-validator");
const {
  postPrendas,
  getPrendas,
  getPrendasByTipo,
  getPrendasByTipoAndGenero,
} = require("../controllers/PrendasController");
const { validarCampos } = require("../middlewares/validator");
const router = Router();

router.post(
  "/prendas",
  [
    check("marca").not().isEmpty(),
    check("descripcion").not().isEmpty(),
    check("tipo").not().isEmpty(),
    check("precio").not().isEmpty(),
    check("img_url").not().isEmpty(),
    check("genero").not().isEmpty(),
    validarCampos,
  ],
  postPrendas
);

router.get("/prendas/:id", getPrendas);

router.get("/prendas/tipo/:tipo", getPrendasByTipo);

router.get("/prendas/tipo/:tipo/:genero", getPrendasByTipoAndGenero);

module.exports = router;

const { Router } = require("express");
const { check } = require("express-validator");
const { postPrendas,getPrendas } = require("../controllers/PrendasController");
const { validarCampos } = require("../middlewares/validator");
const router = Router();


router.post(
  "/prendas", 
  [
    check("marca").not().isEmpty(),
    check("descripcion").not().isEmpty(),
    check("tipo").not().isEmpty(),
    check("precio").not().isEmpty(),
    validarCampos,
  ],
  postPrendas
);

router.get(
    "/prendas/:id",
    getPrendas
  );

module.exports = router;
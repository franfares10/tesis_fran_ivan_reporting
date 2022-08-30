let HistoricoEmociones = require("../models/historicoEmociones.model");
const HistoricoEmocionesService = require("../services/historicoEmociones.service");
const PrendasService = require("../services/")
const EmocionService = require("../services/")
const CentroComercialService = require("../services/")
const postHistoricoEmociones = async function (req, res) {
  const { prenda, emocion, centroComercial, fecha } = req.body;

  try {
    //Buscar prenda por id
    const prendaObtenida = await 
    //Buscar emocion por id
    //Buscar centroComercial por id
    const tenantService = new TenantService(tenant);
    const tenantInfo = await tenantService.getTenantInfo();
    const { redirect } = tenantInfo;
    const user = await UserService.getUser(email, tenant);

    return res.status(200).json({
      status: 200,
      token,
      message: "Token created successfully.",
      redirect,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error.",
    });
  }
};

const registerUser = async function (req, res) {
  const { email, password, tenant, name, last_name, admin } = req.body;

  const User = {
    email,
    password,
    tenant,
    name,
    last_name,
    admin,
  };

  try {
    // Previously validate that it is a permitted tenant
    if (!isValidTenant(tenant)) {
      return res.status(406).json({ status: 406, message: "Invalid tenant." });
    }
    // Calling the Service function with the new object from the Request Body
    var createdUser = await UserService.createUser(User);
    return res
      .status(201)
      .json({ user: createdUser, message: "Succesfully Created User" });
  } catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    console.log(e);
    return res.status(400).json({ status: 400, message: e.message });
  }
};

const deleteUser = async function (req, res) {
  const { email, tenant, jwtToken } = req.body;
  //add validat jwt
  const User = {
    email,
    tenant,
  };

  try {
    const retorno = await ClaimService.validateJwt(jwtToken);
    if (!retorno) {
      return res
        .status(401)
        .json({ message: "XX - The JWT Token is not valid." });
    }
    var isDelete = await UserService.deleteUser(User, jwtToken);
    if (isDelete) {
      return res.status(204).send();
    } else {
      return res.status(400).json({
        status: 400,
        user: User,
        message: "Unsuccessfully Deleted User",
      });
    }
  } catch (e) {
    //Return an Error Response Message with Code and the Error Message.
    console.log(e);
    return res.status(400).json({ status: 400, message: e.message });
  }
};

const isValidTenant = (tenant) =>
  VALID_TENANTS.includes(tenant) ? true : false;

module.exports = {
  externalLogin,
  registerUser,
  deleteUser,
};

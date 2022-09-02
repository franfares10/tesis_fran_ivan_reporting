const mongoose = require("mongoose");


const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.log(e);
    console.log("XX. Error conectado la base");
  }
};

module.exports = {dbConnection};
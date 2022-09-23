const mongoose = require("mongoose");

const   mascota = new mongoose.Schema({
  race:  {type: String, required: true},
  age: int,
  id_mascota: {type: int, required: true},
  name: String
});
   
module.exports = mongoose.model("mascota", mascota);

const mongoose = require("mongoose");

const   cita = new mongoose.Schema({
  date: {type: Date, required: true},
  id_cita: {type: int, required: true},
  description: {type: String, required: true}
});
   
module.exports = mongoose.model("cita", cita);
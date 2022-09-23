
const mongoose = require("mongoose");

const   cliente = new mongoose.Schema({
  name:  {type: String, required: true},
  age: int,
  id_client: {type: int, required: true}
});
   
module.exports = mongoose.model("cliente", cliente);
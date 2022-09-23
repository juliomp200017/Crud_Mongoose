
const mongoose = require("mongoose");

const   veterinario = new mongoose.Schema({
  name:  {type: String, required: true},
  age: int,
  id_vet: {type: int, required: true}
});
   
module.exports = mongoose.model("veterinario", veterinario);
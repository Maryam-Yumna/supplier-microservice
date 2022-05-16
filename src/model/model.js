const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const supplierSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone:{
    type: String,
  },
  address:{
    type: String,
  },
  items:[
      {
          type: String
      }
  ]
});
const Supplier = mongoose.model("Supplier", supplierSchema);
module.exports = Supplier;
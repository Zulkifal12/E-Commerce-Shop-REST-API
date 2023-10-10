const mongoose = require("mongoose");

const schema = {
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  price: { type: Number, required: true },
};

const productSchema = mongoose.Schema(schema);

module.exports = mongoose.model("Product", productSchema);

const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  product: {
    type: String,
    required: false,
  },
  size: {
    type: String,
  },
  width: {
    type: Number,
  },
  heigh: {
    type: Number,
  },
  raj: {
    type: String,
  },
  madeYear: {
    type: Number,
  },
  handmade: {
    type: Boolean,
  },
  quantity: {
    type: Number,
  },
  collections: [{ type: String }],
  img: [{ type: String }],

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Products = mongoose.model("products", ProductsSchema);

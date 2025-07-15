// models/product.model.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Enter product name'],
      trim: true,
       unique: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
      unique : true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
       unique: true,
    }
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

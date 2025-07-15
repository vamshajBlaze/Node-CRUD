
// controllers/product.controller.js
const Product = require('../models/product.model');
const { validationResult } = require('express-validator');
exports.createProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res,next) => {
    const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
       req.body, 
       { new: true ,
        runValidators: true  
       });
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Not found' });
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createManyProducts = async (req, res) => {
  try {
    if (!Array.isArray(req.body)) {
      return res.status(400).json({ message: "Body must be an array of products" });
    }
  
    const inserted = await Product.insertMany(req.body);
    res.status(201).json(inserted);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


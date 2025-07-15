
const express = require('express');
const { body,validationResult } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/product.controller');

const productValidation = [
   body().isArray().withMessage('Body must be an array'),
  body('*.name').notEmpty().withMessage('Name is required'),
  body('*.price').isNumeric().withMessage('Price must be a number'),
  body('*.quantity').isNumeric().withMessage('Quantity must be a number'),
];

router.post('/', productValidation,controller.createProduct);

router.post('/create',productValidation, controller.createManyProducts);

router.get('/', controller.getAllProducts);

router.get('/:id', controller.getProductById);

router.put('/:id', productValidation,controller.updateProduct);

router.delete('/:id', controller.deleteProduct);

module.exports = router;

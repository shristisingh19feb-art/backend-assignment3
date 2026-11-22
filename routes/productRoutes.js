const express = require('express');
const c = require('../controllers/productController');
const validateObjectId = require('../middleware/validateObjectId');
const validateStockChange = require('../middleware/validateStockChange');

const router = express.Router();

router.route('/').get(c.getProducts).post(c.createProduct);

// Static routes MUST come before '/:id', otherwise "low-stock" is read as an ID
router.get('/low-stock', c.getLowStock);
router.get('/summary', c.getSummary);

router
  .route('/:id')
  .get(validateObjectId, c.getProductById)
  .put(validateObjectId, c.updateProduct)
  .delete(validateObjectId, c.deleteProduct);

router.patch('/:id/stock', validateObjectId, validateStockChange, c.adjustStock);

module.exports = router;

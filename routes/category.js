const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');
const isAuth = require('../middleware/isAuth');
const isAdmin = require('../middleware/isAdmin');

// Category routes
router.post('/v1/category', isAdmin, categoryController.createCategory);
router.get('/v1/categories', categoryController.getCategories);
router.get('/v1/category/:id', categoryController.getCategoryById);
router.put('/v1/category/:id', isAdmin, categoryController.updateCategoryById);
router.delete('/v1/category/:id', isAdmin, categoryController.deleteCategoryById);

module.exports = router;

const express = require('express');
const router = express.Router();
const { uploadSingle } = require('multermate');
const posterController = require('../controllers/poster');
const isAuth = require('../middleware/isAuth');
const isAdmin = require('../middleware/isAdmin');

const uploadConfig = {
  destination: 'uploads/posters',
  fileTypes: ['images'],
  fileSizeLimit: 5 * 1024 * 1024, // 5MB limit
  filename: 'image',
};

// Poster routes
router.post('/v1/poster', isAdmin, uploadSingle(uploadConfig), posterController.createPoster);
router.get('/v1/posters', posterController.getPosters);
router.get('/v1/poster/:id', posterController.getPosterById);
router.put('/v1/poster/:id', isAdmin, uploadSingle(uploadConfig), posterController.updatePosterById);
router.delete('/v1/poster/:id', isAdmin, posterController.deletePosterById);
router.get('/v1/posters/category/:categoryId', posterController.getPostersByCategoryId);

module.exports = router;

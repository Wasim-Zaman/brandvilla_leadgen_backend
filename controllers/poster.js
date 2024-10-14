const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const Joi = require('joi');
const fs = require('fs');
const path = require('path');

const CustomError = require('../utils/error');
const response = require('../utils/response');

// Joi validation schema
const posterSchema = Joi.object({
  categoryId: Joi.string().required(),
});

// Create a new poster
exports.createPoster = async (req, res, next) => {
  try {
    const { error, value } = posterSchema.validate(req.body);
    if (error) {
      throw new CustomError(error.details[0].message, 400);
    }

    if (!req.file) {
      throw new CustomError('Image file is required', 400);
    }

    const newPoster = await prisma.poster.create({
      data: {
        ...value,
        image: req.file.path,
      },
      include: { category: true },
    });

    res.status(201).json(response(201, true, 'Poster created successfully', newPoster));
  } catch (error) {
    console.log(`Error in createPoster: ${error.message}`);
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    next(error);
  }
};

// Get all posters
exports.getPosters = async (req, res, next) => {
  try {
    const posters = await prisma.poster.findMany({
      include: { category: true },
    });

    if (!posters.length) {
      throw new CustomError('No posters found', 404);
    }

    res.status(200).json(response(200, true, 'Posters retrieved successfully', posters));
  } catch (error) {
    console.log(`Error in getPosters: ${error.message}`);
    next(error);
  }
};

// Get poster by ID
exports.getPosterById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const poster = await prisma.poster.findUnique({
      where: { id },
      include: { category: true },
    });

    if (!poster) {
      throw new CustomError('Poster not found', 404);
    }

    res.status(200).json(response(200, true, 'Poster found successfully', poster));
  } catch (error) {
    console.log(`Error in getPosterById: ${error.message}`);
    next(error);
  }
};

// Update poster by ID
exports.updatePosterById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { error, value } = posterSchema.validate(req.body);
    if (error) {
      throw new CustomError(error.details[0].message, 400);
    }

    const existingPoster = await prisma.poster.findUnique({ where: { id } });
    if (!existingPoster) {
      throw new CustomError('Poster not found', 404);
    }

    let updateData = { ...value };
    if (req.file) {
      updateData.image = req.file.filename;
      const oldImagePath = path.join('uploads', existingPoster.image);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
    }

    const updatedPoster = await prisma.poster.update({
      where: { id },
      data: updateData,
      include: { category: true },
    });

    res.status(200).json(response(200, true, 'Poster updated successfully', updatedPoster));
  } catch (error) {
    console.log(`Error in updatePosterById: ${error.message}`);
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    next(error);
  }
};

// Delete poster by ID
exports.deletePosterById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const poster = await prisma.poster.findUnique({ where: { id } });
    if (!poster) {
      throw new CustomError('Poster not found', 404);
    }

    await prisma.poster.delete({ where: { id } });

    const imagePath = path.join('uploads', poster.image);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    res.status(200).json(response(200, true, 'Poster deleted successfully'));
  } catch (error) {
    console.log(`Error in deletePosterById: ${error.message}`);
    next(error);
  }
};

// Get all posters category-wise
exports.getPostersByCategoryId = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const posters = await prisma.poster.findMany({
      where: { categoryId },
      include: { category: true },
    });

    if (!posters.length) {
      throw new CustomError('No posters found for this category', 404);
    }

    res.status(200).json(response(200, true, 'Posters retrieved successfully', posters));
  } catch (error) {
    console.log(`Error in getPostersByCategoryId: ${error.message}`);
    next(error);
  }
};

// Get all posters by category name
exports.getPostersByCategoryName = async (req, res, next) => {
  try {
    const { categoryName } = req.params;
    const posters = await prisma.poster.findMany({
      where: {
        category: {
          name: categoryName,
        },
      },
      include: { category: true },
    });

    if (!posters.length) {
      throw new CustomError('No posters found for this category', 404);
    }

    res.status(200).json(response(200, true, 'Posters retrieved successfully', posters));
  } catch (error) {
    console.log(`Error in getPostersByCategoryName: ${error.message}`);
    next(error);
  }
};

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const Joi = require('joi');

const CustomError = require('../utils/error');
const response = require('../utils/response');

// Joi validation schema
const posterSchema = Joi.object({
  categoryId: Joi.string().required(),
  image: Joi.string().required(),
});

// Create a new poster
exports.createPoster = async (req, res, next) => {
  try {
    const { error, value } = posterSchema.validate(req.body);
    if (error) {
      throw new CustomError(error.details[0].message, 400);
    }

    const newPoster = await prisma.poster.create({
      data: value,
      include: { category: true },
    });

    res.status(201).json(response(201, true, 'Poster created successfully', newPoster));
  } catch (error) {
    console.log(`Error in createPoster: ${error.message}`);
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

    const updatedPoster = await prisma.poster.update({
      where: { id },
      data: value,
      include: { category: true },
    });

    res.status(200).json(response(200, true, 'Poster updated successfully', updatedPoster));
  } catch (error) {
    console.log(`Error in updatePosterById: ${error.message}`);
    next(error);
  }
};

// Delete poster by ID
exports.deletePosterById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.poster.delete({ where: { id } });
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

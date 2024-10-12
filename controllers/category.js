const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const Joi = require('joi');

const CustomError = require('../utils/error');
const response = require('../utils/response');

// Joi validation schema
const categorySchema = Joi.object({
  name: Joi.string().required(),
});

// Create a new category
exports.createCategory = async (req, res, next) => {
  try {
    const { error, value } = categorySchema.validate(req.body);
    if (error) {
      throw new CustomError(error.details[0].message, 400);
    }

    const newCategory = await prisma.category.create({
      data: value,
    });

    res.status(201).json(response(201, true, 'Category created successfully', newCategory));
  } catch (error) {
    console.log(`Error in createCategory: ${error.message}`);
    next(error);
  }
};

// Get all categories
exports.getCategories = async (req, res, next) => {
  try {
    const categories = await prisma.category.findMany();

    if (!categories.length) {
      throw new CustomError('No categories found', 404);
    }

    res.status(200).json(response(200, true, 'Categories retrieved successfully', categories));
  } catch (error) {
    console.log(`Error in getCategories: ${error.message}`);
    next(error);
  }
};

// Get category by ID
exports.getCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await prisma.category.findUnique({ where: { id } });

    if (!category) {
      throw new CustomError('Category not found', 404);
    }

    res.status(200).json(response(200, true, 'Category found successfully', category));
  } catch (error) {
    console.log(`Error in getCategoryById: ${error.message}`);
    next(error);
  }
};

// Update category by ID
exports.updateCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { error, value } = categorySchema.validate(req.body);
    if (error) {
      throw new CustomError(error.details[0].message, 400);
    }

    const updatedCategory = await prisma.category.update({
      where: { id },
      data: value,
    });

    res.status(200).json(response(200, true, 'Category updated successfully', updatedCategory));
  } catch (error) {
    console.log(`Error in updateCategoryById: ${error.message}`);
    next(error);
  }
};

// Delete category by ID
exports.deleteCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.category.delete({ where: { id } });
    res.status(200).json(response(200, true, 'Category deleted successfully'));
  } catch (error) {
    console.log(`Error in deleteCategoryById: ${error.message}`);
    next(error);
  }
};

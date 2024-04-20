// controllers/RecipesController.js
const { Recipe } = require('../models/Recipe');

exports.createRecipe = async (req, res) => {
    // Validate the input fields
    if (!req.body.name) {
        return res.status(400).json({ message: 'Error adding new recipe: Name is required' });
    }

    // Add more validations as necessary
    const fields = ['bitrix_id', 'weight', 'time1', 'time2', 'prep', 'subRows'];
    const recipeData = {};

    // Filter out fields that are not defined in the schema
    fields.forEach(field => {
        if (req.body[field] !== undefined) {
            recipeData[field] = req.body[field];
        }
    });

    // Set the required `name` field
    recipeData.name = req.body.name;

    try {
        const newRecipe = new Recipe(recipeData);
        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (error) {
        res.status(400).json({ message: 'Error adding new recipe', error: error.message });
    }
};

exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({});
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recipes', error: error.message });
    }
};

exports.getRecipe = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: 'Recipe ID is required' });
    }

    try {
        const recipe = await Recipe.findById(id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving recipe', error: error.message });
    }
};

exports.updateRecipe = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: 'Recipe ID is required' });
    }

    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json(updatedRecipe);
    } catch (error) {
        res.status(400).json({ message: 'Error updating recipe', error: error.message });
    }
};

exports.deleteRecipe = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: 'Recipe ID is required' });
    }

    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(id);
        if (!deletedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting recipe', error: error.message });
    }
};

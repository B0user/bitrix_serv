const express = require('express');
const router = express.Router();
const materialsController = require('../controllers/materialsController');
const componentsController = require('../controllers/componentsController');
const recipesController = require('../controllers/recipesController');

// Materials Routes
// router.post('/materials', materialsController.createMaterial);
// router.get('/materials', materialsController.getAllMaterials);
// router.put('/materials/:id', materialsController.updateMaterial);
// router.delete('/materials/:id', materialsController.deleteMaterial);

// // Components Routes
// router.post('/components', componentsController.createComponent);
// router.get('/components', componentsController.getAllComponents);
// router.put('/components/:id', componentsController.updateComponent);
// router.delete('/components/:id', componentsController.deleteComponent);

// Recipes Routes
router.get('/recipes',          recipesController.getAllRecipes);
router.get('/recipes/:id',      recipesController.getRecipe);
router.post('/recipes',         recipesController.createRecipe);
router.put('/recipes/:id',      recipesController.updateRecipe);
router.delete('/recipes/:id',   recipesController.deleteRecipe);

module.exports = router;

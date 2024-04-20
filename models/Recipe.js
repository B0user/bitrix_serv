// models/Recipe.js
const mongoose = require('mongoose');


const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bitrix_id: { type: String, required: false },
  weight: { type: String, required: false },
  time1: { type: String, required: false },
  time2: { type: String, required: false },
  prep: { type: String, required: false },
  subRows: { type: [this], default: [] }
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = {Recipe};

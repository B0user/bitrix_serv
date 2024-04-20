const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    bitrix_id: { type: Number, required: true },
    name: { type: String, required: true },
    weight: { type: Number, required: true }
});

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;

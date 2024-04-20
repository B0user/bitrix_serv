const Material = require('../models/Material');

// Create a new material
exports.createMaterial = async (req, res) => {
    try {
        const { bitrix_id, name, weight } = req.body;
        const material = new Material({ bitrix_id, name, weight });
        const savedMaterial = await material.save();
        res.json(savedMaterial);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all materials
exports.getAllMaterials = async (req, res) => {
    try {
        const materials = await Material.find();
        res.json(materials);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a material by ID
exports.updateMaterial = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedMaterial = await Material.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedMaterial);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a material by ID
exports.deleteMaterial = async (req, res) => {
    try {
        const { id } = req.params;
        await Material.findByIdAndDelete(id);
        res.json({ message: 'Material deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

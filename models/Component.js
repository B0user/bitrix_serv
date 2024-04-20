const mongoose = require('mongoose');

const componentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    components: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Component' }]
});

const Component = mongoose.model('Component', componentSchema);

module.exports = Component;

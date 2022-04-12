const mongoose = require('mongoose');

const plantSchema = mongoose.Schema({
    images: [{ type: String, required: true }],
});

const Plant = mongoose.model('Deco', decoSchema, 'Deco');

module.exports = Deco;
const mongoose = require('mongoose');

const plantSchema = mongoose.Schema({
    name: { type: String, required: true },
    images: [{ type: String, required: true }],
    description: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    light: { type: String, required: true },
    lightRatio: { type: Number, required: true },
    water: { type: String, required: true },
    waterRatio: { type: Number, required: true },
    care: { type: String, required: true },
    careRatio: { type: Number, required: true },
    size: { type: String, required: true },
    room: { type: String, required: true }
});

const Plant = mongoose.model('Plant', plantSchema, 'Plant');

module.exports = Plant;
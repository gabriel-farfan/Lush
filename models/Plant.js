const mongoose = require('mongoose');

const plantSchema = mongoose.Schema({
    // { "name": {"$regex": "...", "$options": "i" } }
    name: { type: String, required: true },
    description: { type: String, required: true },
    // { "price": {"$gte": 0.0, "$lte": 1.0 } }
    price: { type: Number, required: true },
    // { "size": { "$in": [ "small", "medium", "large" ] } }
    size: { type: String, required: true },
    // { "type": { "$in": [ ... ] } }
    type: { type: String, required: true },
    images: [{ type: String, required: true }],
    care: { type: String, required: true },
    light: { type: String, required: true },
    room: { type: String, required: true },
    sadSigns: { type: String, required: false },
    // { "lightRatio": {"$gte": 0.0, "$lte": 1.0 } }
    lightRatio: { type: Number, required: true },
    // { "waterRatio": {"$gte": 0.0, "$lte": 1.0 } }
    waterRatio: { type: Number, required: true },
    // { "careRatio": {"$gte": 0.0, "$lte": 1.0 } }
    careRatio: { type: Number, required: true }
});

const Plant = mongoose.model('Plant', plantSchema, 'Plant');

module.exports = Plant;
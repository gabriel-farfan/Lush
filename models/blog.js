const mongoose = require('mongoose');

const plantSchema = mongoose.Schema({
    blogTitle: { type: String, required: true },
    text: { type: String, required: true },    
    images: [{ type: String, required: true }],
    
});

const Blog = mongoose.model('Blog', plantSchema, 'Blog');

module.exports = Blog;
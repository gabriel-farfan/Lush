const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: [{ type: String, required: true }],
    country: { type: String, required: false },
    addresses: [{ type: String, required: false }],
    emailVerified: { type: Boolean, required: true },
    uniqueString: { type: String, required: true },
    profileurl: {type: String, required: true},
    admin: { type: Boolean, required: false },
    from: { type: Array },
});

const User = mongoose.model('Users', userSchema, 'User');

module.exports = User;
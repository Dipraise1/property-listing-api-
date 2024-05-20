const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    address: String,
    imageUrl: String
});

module.exports = mongoose.model('Property', propertySchema);

const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tagline: String,
    aboutHeading: String,
    aboutParagraphs: [String],
    phone: String,
    email: String,
    photo: String,
    homeVideo: String,
    contactBackground: String
}, { timestamps: true });

module.exports = mongoose.model('Portfolio', portfolioSchema);

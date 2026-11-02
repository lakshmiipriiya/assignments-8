require('dotenv').config();
const mongoose = require('mongoose');
const Portfolio = require('./models/Portfolio');

const portfolioData = {
    name: 'K. Lakshmipriya',
    tagline: 'Student • Creator • Curious Mind',
    aboutHeading: "Hey, I'm K. Lakshmipriya",
    aboutParagraphs: [
        'I am currently pursuing M.Voc in Software Application Development at CUSAT, Kalamassery.',
        'I completed my BCA Data Science from Amrita Vishwa Vidyapeetham, Kochi.',
        'I am interested in learning new technologies. I have basic knowledge of HTML, CSS, Python and SQL.'
    ],
    phone: '8848120757',
    email: 'klakshmipriya928@gmail.com',
    photo: '/images/about.jpeg',
    homeVideo: '/images/home.mp4',
    contactBackground: '/images/contact.png'
};

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        const existing = await Portfolio.findOne();
        if (existing) {
            console.log('Portfolio already exists. Seed skipped to avoid duplicate data.');
            return;
        }

        await Portfolio.create(portfolioData);
        console.log('Portfolio data inserted successfully.');
    } catch (error) {
        console.error('Seed error:', error.message);
        process.exitCode = 1;
    } finally {
        if (mongoose.connection.readyState !== 0) {
            await mongoose.disconnect();
        }
    }
}

seedDatabase();

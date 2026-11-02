require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Portfolio = require('./models/Portfolio');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

async function loadPortfolio(req, res, next) {
    try {
        const portfolio = await Portfolio.findOne().lean();
        if (!portfolio) {
            return res.status(404).send('Portfolio not found. Run "node seed.js" first.');
        }
        res.locals.portfolio = portfolio;
        next();
    } catch (error) {
        next(error);
    }
}

app.get('/', loadPortfolio, (req, res) => {
    res.render('index', { portfolio: res.locals.portfolio });
});

app.get('/about', loadPortfolio, (req, res) => {
    res.render('about', { portfolio: res.locals.portfolio });
});

app.get('/contact', loadPortfolio, (req, res) => {
    res.render('contact', { portfolio: res.locals.portfolio });
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send('Unable to load the portfolio. Check the server and database configuration.');
});

async function startServer() {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is missing. Configure your .env file.');
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected successfully.');

        app.listen(PORT, () => {
            console.log(`Portfolio running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Startup error:', error.message);
        process.exit(1);
    }
}

startServer();

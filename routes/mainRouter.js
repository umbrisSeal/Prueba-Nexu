const express = require('express');
const mainRouter = express.Router();

const brands = require('./brands.route');
const models = require('./models.route');
const populateDatabase = require('../utils/populateDatabase');

mainRouter.use('/brands', brands);
mainRouter.use('/models', models);

mainRouter.post('/', async (req, res) => {
    console.log("Populating database...");
    const success = await populateDatabase();

    if(success) {
        console.log("Database Populated.");
        res.status(200).send("Database Populated.");
    } else {
        res.status(500).send("Error while trying to populate database.");
    }
});


module.exports = mainRouter;
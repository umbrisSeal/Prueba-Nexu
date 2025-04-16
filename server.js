const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.SERVER_PORT || 3000;

const sequelize = require('./database/sequelize.config.js');
const mainRouter = require('./routes/mainRouter.js');

app.use(express.json()); // Allow req.body access.
app.use('/', mainRouter);

app.all('/*notDefined', (req, res) => {
    res.send("Error: Endpoint not defined.");
});



sequelize.authenticate()
    .then(() => {
        console.log("Database connected.");
        app.listen(port, () => console.log(`Server Running on port: ${port}`));
    })
    .catch( (error) => {
        console.log("Database connection error.");
        console.log(`Connection Error: ${error}`);
        process.exit(1);
    })
;

const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./src/routers/film')
require('dotenv').config();
const {connectRedis} = require("./src/configs/redis");
const winston = require('winston'),
    expressWinston = require('express-winston');
const {startDB} = require("./src/configs/sequelize");
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressWinston.logger({
    level: 'info',
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));
app.use("/api/film", routes)
app.listen(process.env.PORT, () => {
    console.log(`Server Running at port ${process.env.PORT}`);
    connectRedis()
    startDB()
});
module.exports = app;
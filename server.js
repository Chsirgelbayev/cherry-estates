const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

const connectDB = require('./config/db');
const todosRoutes = require('./routes/list');
const { NODE_ENV, PORT } = process.env;

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

connectDB();

if (NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app
    .engine('hbs', hbs.engine)
    .set('view engine', 'hbs')
    .set('views', 'views')
    .use(express.static('public'))
    .use(todosRoutes);

const server = app.listen(PORT || 3000, () => {
    console.log(
        `Server running in ${NODE_ENV} mode on ${PORT} PORT`.white.bgCyan
    );
});

process.on('unhandledRejection', e => {
    console.log(`Error: ${e.message}`.red.underline.bold);
    server.close(() => process.exit(1));
});

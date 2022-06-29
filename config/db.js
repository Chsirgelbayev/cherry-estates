const mongoose = require('mongoose');

const connectDB = async () => {
    const { MONGO_URL } = process.env;
    await mongoose
        .connect(MONGO_URL, {
            useNewUrlParser: true
        })
        .then(res => {
            console.log(
                `MongoDB Connected: ${res.connection.host}`.black.bgGreen
            );
        });
};

module.exports = connectDB;

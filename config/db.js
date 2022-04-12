const mongoose = require("mongoose");

const connectDB = async () => {
  const { MONGO_URL } = process.env;
  const conn = await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`.black.bgGreen);
};

module.exports = connectDB;
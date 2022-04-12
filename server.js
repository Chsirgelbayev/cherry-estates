const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const colors = require("colors");
const morgan = require("morgan");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
dotenv.config({ path: "./config/devmode.env" });

const { NODE_ENV, PORT } = process.env;
const connectDB = require("./config/db");

const todosRoutes = require("./routes/list");

const app = express();

const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

connectDB();

if (NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");
app.use(express.static("public"));

app.use(todosRoutes);

const server = app.listen(PORT || 3000, () => {
  console.log(
    `Server is running on ${NODE_ENV} mode and ${PORT} port`.black.bgYellow
  );
});

process.on("unhandledRejection", (e) => {
  console.log(`Error: ${e.message}`.red.underline.bold);
  server.close(() => process.exit(1));
});

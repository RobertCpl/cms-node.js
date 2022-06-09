const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const sequelize = require("./utilitys/database");

const adminRouts = require("./routs/adminRouts");
const shopRouts = require("./routs/shopRouts");

const app = express();

app.set("view engine", "ejs"); // html templets enginejs
app.set("views", "views"); // views cataloug

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouts);
app.use(shopRouts);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitel: "Page not found" });
});

sequelize.sync().then((result) => {
  console.log(result);
});

app.listen(3000);

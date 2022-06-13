const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodedb", "root", "robertsql", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

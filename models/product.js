const Sequelize = require("sequelize");

const sequelize = require("../utilitys/database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;

// module.exports = class Product {
//   constructor(name, price, description, category) {
//     this.id = 0;
//     this.name = name;
//     this.price = price;
//     this.description = description;
//     this.category = category;
//   }
//   save() {
//     return db.execute(
//       "insert into products(name, price, description, category  ) values (?,?,?,?) ",
//       [this.name, this.price, this.description, this.category]
//     );
//   }
//   static fetchAll() {
//     return db.execute("select * from products");
//   }
//   static findeProduct(id) {
//     return db.execute("select * from products where  id = ?", [id]);
//   }
// };

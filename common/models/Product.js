const { DataTypes } = require("sequelize");

const ProductModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
};

module.exports = {
  initialise: (sequelize) => {
    this.model = sequelize.define("product", ProductModel)
  },

  createProduct: (product) => {
    return this.model.create(product);
  },

  findProduct: (query) => {
    return this.model.findOne({
      where: query,
    });
  },

  updateProduct: (query, updatedValue) => {
    return this.model.update(updatedValue, {
      where: query,
    });
  },

  findAllProducts: (query) => {
    return this.model.findAll({
      where: query
    });
  },

  deleteProduct: (query) => {
    return this.model.destroy({
      where: query
    });
  }
}
const express = require("express");
const { Sequelize } = require("sequelize");
const app = express ();
app.use(express.json());
const PORT = process.env.PORT || 3000;

const ProductRoutes = require("./products/routes");

const ProductModel = require("./common/models/Product");

const sequelize = new Sequelize('node_rest_api_scheme', 'root', 'root', {
	host: '127.0.0.1',
	dialect: 'mysql',
	port: 3306,
});

ProductModel.initialise(sequelize);

sequelize
  .sync()
  .then(() => {
    console.log("Sequelize Initialised!!");

    app.use("/product", ProductRoutes);

    app.listen(PORT, () => {
      console.log("Server Listening on PORT:", PORT);
    });
  })
  .catch((err) => {
    console.error("Sequelize Initialisation threw an error:", err);
  });  
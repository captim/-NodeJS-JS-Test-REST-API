const router = require("express").Router();

const ProductController = require("./controllers/ProductController");

router.get("/", ProductController.getAllProducts);
router.post("/", ProductController.createProduct);

module.exports = router;
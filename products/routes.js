const router = require("express").Router();

const ProductController = require("./controllers/ProductController");

router.get("/", ProductController.getAllProducts);
router.post("/", ProductController.createProduct);
router.get("/:productId", ProductController.getProductById);
router.put("/:productId", ProductController.updateProduct);
router.delete("/:productId", ProductController.deleteProduct);


module.exports = router;
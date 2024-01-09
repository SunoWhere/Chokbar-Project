const express = require("express")
const productsController = require("../controllers/products.controller")
const productsMiddleware = require("../middlewares/products.middleware")
var router = express.Router()

router.get("/stands/:id", productsController.getProductsByStandId)
router.get("/:id_product", productsMiddleware.validateProductId, productsController.getProductById)

router.post("/", productsController.saveProduct)

router.put("/:id_product", productsMiddleware.validateProductId, productsController.updateProductById)

router.delete("/:id_product", productsMiddleware.validateProductId, productsController.deleteProductById)

module.exports = router
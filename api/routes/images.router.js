const express = require("express")
const imagesController = require("../controllers/images.controller")
const imagesMiddleware = require("../middlewares/images.middleware")
var router = express.Router()

router.get("/", imagesController.getImages)

router.get("/:filename", imagesController.getImageByName)

router.post("/", imagesMiddleware.validateImage, imagesController.addImage)

router.delete("/:id", imagesController.deleteImage)

module.exports = router
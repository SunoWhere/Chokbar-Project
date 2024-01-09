const express = require("express")
const imagesController = require("../controllers/images.controller")
var router = express.Router()

router.get("/", imagesController.getImages)

router.get("/:filename", imagesController.getImageByName)

router.post("/", imagesController.addImage)

router.delete("/:id", imagesController.deleteImage)

module.exports = router
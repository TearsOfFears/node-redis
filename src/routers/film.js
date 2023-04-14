const Router = require("express")
const checkCache = require("./../middleware/checkCache")
const filmController = require("../controllers/filmContoller")

const router = new Router()

router.get("/:title", checkCache,  (filmController.get).bind(filmController))

module.exports = router
const Router = require("express");
const checkCache = require("./../middleware/checkCache");
const response = require("./../middleware/response");
const filmController = require("../controllers/filmContoller");

const router = new Router();

router.get(
  "/:title",
  checkCache,
  response(async (dtoIn) => filmController.get(dtoIn))
);

module.exports = router;

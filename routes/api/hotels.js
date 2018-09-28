const router = require("express").Router();
const hotelsController = require("../../controllers/hotelsController");

// Matches with "/api/hotels"
router.route("/")
  .get(hotelsController.findAll)
  .post(hotelsController.create);

// Matches with "/api/hotels/:id"
router
  .route("/:id")
  .get(hotelsController.findById)
  .put(hotelsController.update)
  .delete(hotelsController.remove);

module.exports = router;

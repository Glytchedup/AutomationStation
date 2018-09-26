const router = require("express").Router();
const hotelRoutes = require("./hotels");

// Hotel routes
router.use("/hotels", hotelRoutes);

module.exports = router;

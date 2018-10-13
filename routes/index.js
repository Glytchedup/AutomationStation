const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);
router.get("/api/trivago", function (req, res) {
var cmd = require('node-cmd');
cmd.run(
  ' cd "./client/src/components/Scripts/app/" && java -jar mariott.script-0.10.jar calendar2',
)
  })


// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;

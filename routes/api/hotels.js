const router = require("express").Router();
const hotelsController = require("../../controllers/hotelsController");

// Matches with "/api/hotels"
router.route("/")
  .get(hotelsController.findAll)
    // console.log('routes/hotels.js/"/get"')
  .post(hotelsController.create);

    // Matches with "/api/hotels/:id"
  router
  .route("/:id")
  .get(hotelsController.findById)
  // console.log('routes/hotels.js/"/id find"')
  .put(hotelsController.update)
  // console.log('routes/hotels.js/"/id update"')
  .delete(hotelsController.remove);
  
  // router.route("/trivago")
  // .get(hotelsController.trivago);



  // router.get('/trivago', function(req, res) {
  //   var cmd = require('node-cmd');
  //   cmd.run(
  //     ' cd "./client/src/components/Scripts/app/" && java -jar mariott.script-0.10.jar calendar2',
  //     function(err, data, stderr){
  //         console.log('the current working dir is : ',data)
  //     }
  //   ); 
  // })

  module.exports = router;

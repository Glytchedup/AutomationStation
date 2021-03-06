const db = require("../models");
const scrapeHotel = require("./webscrape");
// Defining methods for the hotelsController
module.exports = {
  findAll: function (req, res) {
    db.Hotel
      .find(req.query)
      .sort({
        date: -1
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Hotel
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    scrapeHotel(req, res);
  },
  update: function (req, res) {
    db.Hotel
      .findOneAndUpdate({
        _id: req.params.id
      }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Hotel
      .findById({
        _id: req.params.id
      })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  read: function (res) {
    axios
    .get("api/trivago")
    .then(response => console.log(response))
    .catch(err => res.status(422).json(err));

    // trivago(req,res);
  },
 runIO: function(req, res) {
    var cmd = require('node-cmd');
      cmd.run(
        ' cd "./client/src/components/Scripts/app/" && java -jar mariott.script-0.10.jar calendar2',
        function(err, data, stderr){
        }
        );
      },
  runGPO: function(req, res) {
        var cmd = require('node-cmd');
          cmd.run(
            ' cd "./client/src/components/Scripts/app/" && java -jar mariott.script-0.10.jar testprice',
            function(err, data, stderr){
            }
            );
          }
    };
const db = require("../models");
const request = require("request");
const cheerio = require("cheerio");

//fix this to run when you add to hotel list -- and add info to db.
// export default function webScrape() {

// const scrapeSample = {
//   title: "Courtyard Fresno",
//   photo: "https://cache.marriott.com/marriottassets/marriott/FATCH/fatch-exterior-0014-hor-feat.jpg?interpolation=progressive-bilinear&downsize=1180px:*",
//   address: "140 East Shaw Avenue",
//   city: "Fresno",
//   state: "California",
//   zip: "93710",
//   phone: "1 559-221-6000"
// };

 function scrapeHotel(req,res) {

  var scrapeResult = {};

    var url = `https://marriott.com/${req.body.marsha}`;
    // var url = `https://marriott.com/rwlfi`;
    // const htmlResult = await request.get(url);
     request(url, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:',response.statusCode); // Print the response status code if a response was received
      //  console.log('body:', body); // Print the HTML for the Google homepage.
     
      if (!error && response.statusCode == 200) {
        const $ =  cheerio.load(body);
        $(".page-container").each(() => {
    
          // Edit Text Somehow....
          const title = $("span[itemprop = 'name']").text();
          const photo = $(".l-align-center").attr("src");
           const address = $("span[itemprop = 'streetAddress']").text();
          const city = $("span[itemprop = 'addressLocality']").text();
          const state = $("span[itemprop = 'addressRegion']").text();
          const zip = $("span[itemprop = 'postalCode']").text();
          const phone = $("span[itemprop = 'telephone']").text();
          scrapeResult = {
            title,
            photo,
            address,
            city,
            state,
            zip,
            phone
          };
      });
    }
       const result =  JSON.stringify(scrapeResult);
    //   console.log("scrape results: " + result);
       const info = {};
       Object.assign(info,req.body,scrapeResult);
      //  console.log("info"+ JSON.stringify(info));
      db.Hotel
      .create(info)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    });
   
}
module.exports = scrapeHotel;
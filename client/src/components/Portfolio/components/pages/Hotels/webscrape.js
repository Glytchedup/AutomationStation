const request = require("request-promise");
const cheerio = require("cheerio");

//fix this to run when you add to hotel list -- and add info to db.
// export default function webScrape() {

const scrapeSample = {
  title: "Courtyard Fresno",
  photo: "https://cache.marriott.com/marriottassets/marriott/FATCH/fatch-exterior-0014-hor-feat.jpg?interpolation=progressive-bilinear&downsize=1180px:*",
  address: "140 East Shaw Avenue",
  city: "Fresno",
  state: "California",
  zip: "93710",
  phone: "1 559-221-6000"
};

export default async function scrapeHotel(urlm) {

  const scrapeResults = [];

   var url = `https://marriott.com/${urlm}`;
 // var url = `https://marriott.com/rwlfi`;
  try {
    const htmlResult = await request.get(url);
    const $ = await cheerio.load(htmlResult);

    $(".page-container").each(() => {

      // Edit Text Somehow....
      const title = $("span[itemprop = 'name']").text();

      const photo = $(".l-align-center").attr("src");
      const address = $("span[itemprop = 'streetAddress']").text();
      const city = $("span[itemprop = 'addressLocality']").text();
      const state = $("span[itemprop = 'addressRegion']").text();
      const zip = $("span[itemprop = 'postalCode']").text();
      const phone = $("span[itemprop = 'telephone']").text();
      const scrapeResult = {
        title,
        photo,
        address,
        city,
        state,
        zip,
        phone
      };
      scrapeResults.push(scrapeResult);
    });

    console.log("scrape results: " + JSON.stringify(scrapeResults));
  } catch (err) {
    console.log(err);
  }
  return ;
}
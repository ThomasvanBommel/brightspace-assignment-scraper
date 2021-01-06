/**
 * @author Thomas vanBommel
 * @since 01-05-2021
 */
const puppeteer = require("puppeteer");

/**
 * Scrape assignments for a class from a brightspace url and one of the url
 * params to increase
 * @function
 * @param {string} username - Brightspace username
 * @param {string} password - Brightspace password
 * @param {string} url - First assignments full url, including params
 * @param {string} inc_param - URLParameter to increment (usually "db")
 * @returns List of assignment objects {title, content, url}
 */
async function scrapeAssignments(username, password, url, inc_param){
  let list = [];

  // let idx = url.indexOf("?");
  let url2 = url.split("?");
  let params = new URLSearchParams(url2[1]);
  let val = params.get(inc_param);
  let target = url;

  console.log("Loading browser...");

  //load browser + goto url
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(target);

  // fill out login form
  await page.type("#userName", username);
  await page.type("#password", password);

  // progress screenshot
  await page.screenshot({ path: `progress/0.png`, fullPage: true });

  // click login and waitForNavigation
  await page.click("#formId button");
  await page.waitForNavigation();

  // loop count
  let i = 0;

  // attempt to scrape assignment data
  try{
    while(true){
      let data = await scrape(page);
      list.push(data);

      // increment url
      params.set(inc_param, parseInt(params.get(inc_param)) + 1)
      target = url2[0] + "?" + params.toString();

      // console.log(target);
      await page.screenshot({ path: `progress/${i+1}.png`, fullPage: true });

      // goto next assignment at the new url (target)
      await page.goto(target);
      i++;
    }
  }catch(e){}

  // close browser
  await browser.close();

  return list;
}

/**
 * Scrape assignment title, content, and url and return that object
 * @function
 * @param {Object} page - Puppeteer page object
 * @returns {Object} - {title, content, url}
 * @throws Error when unable to scrape content
 */
async function scrape(page){
  let title = await page.$eval("#d_page_title", e => e.textContent);
  let content = await page.$eval(".d2l-dropbox-submissiontext", e => e.textContent);

  console.log("scraped:", title);

  return { title: title, content: content, url: page.url() };
}

module.exports = {scrapeAssignments, scrape};

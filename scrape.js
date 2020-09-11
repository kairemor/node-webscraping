const request = require("request");
const cheerio = require('cheerio');
const url = 'http://polytechbot.herokuapp.com'

request(url, (err, res, html) => {
    if (!err && res.statusCode == 200) {
        // console.log(html)
        const $ = cheerio.load(html)
        // console.log($);

        const container = $('.container')
        // console.log(container.text());
        // console.log(container.html());
        $('a').each((i, el) => {
            const links = $(el).attr('href')
            console.log(links);
        })

    }
})
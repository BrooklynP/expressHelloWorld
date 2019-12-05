var rp = require('request-promise');
const express = require('express');
const $ = require('cheerio');
const app = express();
const port = 3000;

const baseURL = 'https://www.indeed.co.uk/';
const searchQuery = 'software+developer+apprenticeship';
const searchLocation = 'Hertfordshire'

let html;
let jobsLinksToCheck = [];

rp(baseURL + 'jobs?q=' + searchQuery + '&l=' + searchLocation)
    .then((res) => {

        this.html = res;
        let jobLinks = $('div.jobsearch-SerpJobCard > div.title > a', res);
        for (let i = 0; i < jobLinks.length; i++) {
            // jobsToCheck.push({ title: jobLinks[i].attribs.title, link: jobLinks[i].attribs.href });
            jobsLinksToCheck.push(jobLinks[i].attribs.href)
        }
    }).then(() => {
        for (let i = 0; i < jobsLinksToCheck.length; i++) {
            rp(baseURL + jobsLinksToCheck[i]).then((res) => {
                console.log($('h3.jobsearch-JobInfoHeader-title', res).contents().first().text());
            })
        }
    })




//End Points
app.get('/array', (req, res) => res.send(['1', '2', '3', '4']))
app.get('/html', (req, res) => res.send(html))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
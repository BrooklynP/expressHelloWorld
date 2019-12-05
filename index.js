var rp = require('request-promise');
const express = require('express')
const app = express()
const port = 3000
const url = 'http://www.google.com'
let html;

rp(url)
    .then( (htmlString) => {
    console.log(htmlString)
    this.html = htmlString;
})


app.get('/array', (req, res) => res.send(['1','2','3','4']))
app.get('/', (req, res) => res.send(html))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
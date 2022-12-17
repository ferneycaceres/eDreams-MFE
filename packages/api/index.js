const express = require('express')
const app = express()
const itinerariesData = require('./data/itineraries.json')
const locations = require('./data/locations.json')
const port = 3000

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.get('/itineraries', (req, res) => res.send(itinerariesData))
app.get('/locations', (req, res) => res.send(locations))

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

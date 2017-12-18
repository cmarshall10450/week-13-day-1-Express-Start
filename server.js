const express = require('express')
const routes = require('./controllers/')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('client/public'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendFile('index.html')
})

app.use(routes)

app.listen(3000, function () {
  console.log(`Films app listening on port ${ this.address().port }`)
})

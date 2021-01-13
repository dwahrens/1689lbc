const express = require('express')
const bodyParser = require('body-parser')
const { join } = require('path')
var fs = require('fs')
const app = express()

app.use(bodyParser.json())
app.use('/public', express.static(join(__dirname, "public")))

const routes = require("./routes/routes.js")(app, fs)

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
  console.log(`listening on ${port}`)
})

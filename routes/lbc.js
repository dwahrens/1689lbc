const dataPath = "./data/lbcf.json";

const lbcfRoutes = (app, fs) => {
  app.get("/lbc", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err
      }

      res.send(JSON.parse(data))
    })
  })

  app.get("/lbcf/:id", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) { throw err }
      var id = parseInt(req.params.id)-1
      var lbcf = JSON.parse(data)
      res.send(JSON.stringify(lbcf.chapters[id]))
    })
  })
}

module.exports = lbcfRoutes
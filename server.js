//.envFile
var port = process.env.PORT

var express = require("express")
var app = express()
app.use("/public", express.static("public"))
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(port, () => {
    console.log('server listening. Port:' + port)
    console.log(`http://localhost:${port}`)
})


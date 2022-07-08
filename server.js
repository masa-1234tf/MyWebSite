//.envFile
var port = process.env.PORT

var express = require("express")
var app = express()

server.listen(port, () => {
    console.log('server listening. Port:' + port);
});


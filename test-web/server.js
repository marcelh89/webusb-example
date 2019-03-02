var express = require('express');
var app = express();
var path = require('path');
var port = 8080;

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
    console.log("Server running on port ",port)
});
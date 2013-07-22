var express = require('express');
var fs = require("fs"); 

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

b = fs.readFileSync("index.html");
str = buf.toString(b); 
response.send("Hello world2");   
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

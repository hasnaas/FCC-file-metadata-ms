// server.js
var multer  = require('multer')
var express = require('express');
//var mongo= require('mongodb').MongoClient;
var upload = multer({ dest: 'assets/' });

var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
//app.set("views",__dirname + '/views/')
app.get("/",function(request,response){
  response.sendFile(__dirname+'/views/index.html')
});
    
app.post("/",upload.single("fp"),function(request,response){
  console.log(request.body);
  console.log(request.file);
  response.send({"size":request.file.size});
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

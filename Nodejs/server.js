var express = require('express');
var app = express();
var router = express.Router();
var app = new express();
var bodyParser = require("body-parser");
const fetch = require('node-fetch');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/SearchBusiness/:name/:location", function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  fetch("https://api.yelp.com/v3/businesses/search?term="+req.params.name+"&location="+req.params.location ,{
    headers: {
  "Authorization":'Bearer oYcZPLG5e8qWXE7dG7iRTC5YFS0W2XcUrGSyNAYJZtNNcdkci28ps2eEPHoz46e58oZsjM9vaRz9hHFbO2gdPrp7XwgrIbnHy7U6Vabp4tQLOSHnxNzkBBLbKY3iXnYx',
 "Content-Type": 'application/json',
   }, })
  .then(response => response.json())
  .then(data => {
    res.send(data);
  })
  .catch(err => console.log(err) )

});
var server = app.listen(5000, function () {




  

  
    console.log('Server is running..');
});
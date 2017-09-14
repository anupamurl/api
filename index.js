

 
var express = require('express');
var request = require('request');
var cors = require('cors');


var app = express();
app.use(cors());
app.get("/api",function(req,res){  
  var options = {
  method: 'GET',
  url: 'https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/foSecStockWatch.json',
  headers:
  { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.62 Safari/537.36' }
};  
 request(options, function (error, response, body) {
 var data = JSON.parse(body);

 res.json(data.data);


})
}) 



app.get("/",function(req,res){
res.send("Running")
})


app.listen(80, function () {
  console.log('running');
});

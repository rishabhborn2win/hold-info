const express = require('express');
const app = new express();
const { default: axios } = require('axios');
var morgan = require('morgan')

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))




app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
  //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    // Pass to next layer of middleware
    next();
  });

app.use(express.static(__dirname + '/public'));

app.get('/', async function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/name', async function(req, res){
    var data =[
        {
            name: "BTC/INR",
            last: "2587560",
            buy: "2,587,560",
            sell: "2,987,870",
            volume: "28.16729",
            base_unit: "btc"
        },
        {
            name: "BTC/INR",
            last: "2587560",
            buy: "2,587,560",
            sell: "2,987,870",
            volume: "28.16729",
            base_unit: "btc"
        },
        {
            name: "BTC/INR",
            last: "2587560",
            buy: "2,587,560",
            sell: "2,987,870",
            volume: "28.16729",
            base_unit: "btc"
        },
        {
            name: "BTC/INR",
            last: "2587560",
            buy: "2,587,560",
            sell: "2,987,870",
            volume: "28.16729",
            base_unit: "btc"
        },
        {
            name: "BTC/INR",
            last: "2587560",
            buy: "2,587,560",
            sell: "2,987,870",
            volume: "28.16729",
            base_unit: "btc"
        },
        {
            name: "BTC/INR",
            last: "2587560",
            buy: "2,587,560",
            sell: "2,987,870",
            volume: "28.16729",
            base_unit: "btc"
        },
        {
            name: "BTC/INR",
            last: "2587560",
            buy: "2,587,560",
            sell: "2,987,870",
            volume: "28.16729",
            base_unit: "btc"
        },
        {
            name: "BTC/INR",
            last: "2587560",
            buy: "2,587,560",
            sell: "2,987,870",
            volume: "28.16729",
            base_unit: "btc"
        },
        {
            name: "BTC/INR",
            last: "2587560",
            buy: "2,587,560",
            sell: "2,987,870",
            volume: "28.16729",
            base_unit: "btc"
        },
        {
            name: "BTC/INR",
            last: "2587560",
            buy: "2,587,560",
            sell: "2,987,870",
            volume: "28.16729",
            base_unit: "btc"
        },
    ]
    res.json(data);
})


//Declaring the servers
var port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server started on ${port}`));
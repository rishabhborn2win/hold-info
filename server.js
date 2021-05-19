const express = require('express');
const app = new express();
const { default: axios } = require('axios');
var morgan = require('morgan')


morgan(':method :url :status :res[content-length] - :response-time ms')



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

app.get('/', async function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/name', async function(req, res){
    var name = await axios.get("https://www.lfyd.in/api/getdetail/9044937880")
    res.json(name.data);
})


//Declaring the servers
var port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server started on ${port}`));

//importing necessary modules
const express = require('express');
const logger = require("morgan");
const bodyParser = require("body-parser");
const http = require("http");
const mongoose = require("mongoose");
const port = 4001;
const api = require("./apis");
const Product = require('./models/productSchema');

const app = express();



//connecting mongodb database
//mongoose.connect('mongodb://admin:Shahjahan101@ds149742.mlab.com:49742/bazooka-db');
mongoose.connect('mongodb://localhost:27017/bazooka_db');
// mongodb://localhost:27017/bazooka_db

//logger of all requests
app.use(logger("short"));   
app.use((req, res, next) => {
    console.log(`request arrived of ${req.method}`)
    next();
})

//using bodyparser middleware for handling post requests
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//to allow acess
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Credentials', "true");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.get('/', function (req, res) {
    res.send(`hellow from bazooka`)
})

//api section for handling apis
app.use('/api', api);


 

app.listen(process.env.PORT || port, () => {
    console.log(`App started on port ${port}`);
});


  



//requsets to handle products data

// post    /api/submitProduct
// get     /api/viewProducts
// delete  /api/deleteAd/:id(product id)
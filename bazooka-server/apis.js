const express = require("express");
const Product = require('./models/productSchema');
const mongoose = require("mongoose");


const api = express.Router();

api.use((req, res, next) => {
    console.log(`req have arrived in api section`);
    next();
})

api.get('/', (req, res) => {
    res.send({data:'welcome to api'})
})

//for submitting ad
api.post('/submitProduct', (req, res) => {
    let newProduct = new Product({
        adTitle: req.body.adTitle,
        adDescription: req.body.adDescription,
        category: req.body.category,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        city: req.body.city,
        productImgStorageURL: req.body.productImgStorageURL,
        price: req.body.price,
        dateOfPublish: req.body.dateOfPublish,
        userUid: req.body.userUid,
        productId: new mongoose.Types.ObjectId(),  
    });

    newProduct.save(function (err, succ) {
        if (err) {
            res.send(err);
            return;
        }
        else{
            res.send(succ);
            return;
        }
        
      });

    
})

//for viewing ads
api.get('/viewProducts', (req, res) => {
    Product.find(function(err, data) {
        res.send(data);
    })
})


//for deleting ad
api.delete('/deleteAd/:id', (req, res) => {
    // res.send(req.params.id)
    Product.deleteOne({ productId: req.params.id }, function(err, pro) {
       if(err) {
           res.send(err);
       }
       else{res.send(pro)}
    })
})

module.exports = api;
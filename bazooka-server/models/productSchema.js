const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    adTitle: String,
    adDescription: String,
    category: String,
    name: String,
    phoneNumber: String,
    city: String,
    productImgStorageURL: String,
    price: String,
    dateOfPublish: String,
    userUid: String,
    productId: Schema.Types.ObjectId,
})

let Product = mongoose.model("Product", ProductSchema);
module.exports = Product;

//import mongoose
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema ({
name: String,
price: Number,
category: String, 
image: String, 
})
//export this schema so that you can use it in the server.js
module.exports = mongoose.model("Product", productSchema);
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({  
  title: String,
  description: String,
  price: Number,
  image_link: String
});

module.exports = mongoose.model('Products', ProductSchema);
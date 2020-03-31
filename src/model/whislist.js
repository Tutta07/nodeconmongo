 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var wishlistSchema = new Schema({
  name: String,
  owner: String,
  items: [{ name: String, url: String, image: String }]
});

module.exports = mongoose.model("Wishlist", wishlistSchema);
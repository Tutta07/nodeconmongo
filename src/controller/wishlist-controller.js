 
const Wishlist = require("../models/wishlist");

function getAllWishlists(request, response) {
  Wishlist.find({})
    .then(function(wishlists) {
      response.status(200).send(wishlists);
    })
    .catch(function(err) {
      response.status(500).send({ message: "Ops! Ocorreu um erro" });
    });
}

function getWishlistById(request, response) {
  response.send("BUSCANDO WISHLIST POR ID" + request.params.id);
}

function createWishlist(request, response) {
  const wishlist = request.body;

  Wishlist.create(wishlist)
    .then(function() {
      response.status(201).send({ message: "Wishlist createtd" });
    })
    .catch(function(err) {
      console.error(err);
      response
        .status(500)
        .send({ message: "Ops! Estamos com alguns problemas." });
    });
}

module.exports = {
  getAllWishlists: getAllWishlists,
  getWishlistById: getWishlistById,
  createWishlist: createWishlist
};
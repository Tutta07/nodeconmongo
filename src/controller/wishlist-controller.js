 
const Wishlist = require("../model/wishlist");

function getAllWishlists(request, response) {
  Wishlist.find({})
    .then(function(wishlists) {
      response.status(200).send(wishlists);
    })
    .catch(function(err) {
      response.status(500).send({ message: "Huy! Tenemos un error" });
    });
}

function getWishlistById(request, response) {
  response.send("BUSCANDO WISHLIST POR ID" + request.params.id);
}

function createWishlist(request, response) {
  const wishlist = request.body;

  Wishlist.create(wishlist)
    .then(function() {
      response.status(201).send({ message: "Creamos su Wishlist" });
    })
    .catch(function(err) {
      console.error(err);
      response
        .status(500)
        .send({ message: "Huy! Estamos teniendo algunos problemas." });
    });
}

module.exports = {
  getAllWishlists: getAllWishlists,
  getWishlistById: getWishlistById,
  createWishlist: createWishlist
};
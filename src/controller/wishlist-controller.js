 
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
function deleteWishlistById(request, response){
  Wishlist.deleteOne({_id: request.params.id})
   .then(function(){
       response.status(200).send("WishList Eliminada con suceso!")
   }).catch(function(err){
      response.status(500).send({message: "Huy! Estamos teniendo algunos problemas." })
      console.error(err)
   });    
}



function updateWishlistById(request, response){ 

  Wishlist.findByIdAndUpdate(request.params.id,{name:request.body.name},function(){})
   .then(function(){
       response.status(200).send("WishList Actualizada con exito!")
       console.log()

   }).catch(function(err){
      response.status(500).send({message: "Huy! Estamos teniendo algunos problemas." })
      console.error(err)
   });    
}


module.exports = {
  getAllWishlists: getAllWishlists,
  getWishlistById: getWishlistById,
  createWishlist: createWishlist,
  deleteWishlistById:deleteWishlistById,
  updateWishlistById:updateWishlistById
};
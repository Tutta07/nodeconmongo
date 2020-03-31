const express = require("express");
const router = express.Router();

const WishlistController = require("../controllers/wishlist-controller");

router.get("/wishlist", WishlistController.getAllWishlists);

router.post("/wishlist", WishlistController.createWishlist);

router.get("/wishlist/:id", WishlistController.getWishlistById);

module.exports = router;
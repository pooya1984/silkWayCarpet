const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Products = require("../../models/Products");
const User = require("../../models/User");

// @route    POST api/posts
// @desc     Create a post
// @access   Private
router.post(
  "/",
  [auth, [check("product", "Product is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newProducts = new Products({
        product: req.body.product,
        size: req.body.size,
        width: req.body.width,
        heigh: req.body.heigh,
        raj: req.body.raj,
        quantity: req.body.quantity,
        collections: req.body.collections,
        madeYear: req.body.madeYear,
        handmade: req.body.handmade,
        img: req.body.img,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });

      const products = await newProducts.save();

      res.json(products);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    GET api/products
// @desc     Get all products
// @access   Public
router.get("/", auth, async (req, res) => {
  try {
    const products = await Products.find().sort({ date: -1 });
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/product/:id
// @desc     Get product by ID
// @access   Private
router.get("/:id", auth, async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.json(product);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;

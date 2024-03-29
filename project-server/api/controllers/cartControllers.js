const Carts = require("../models/Carts");

const getCartByEmail = async (req, res) => {
  try {
    const email = req.query.email;
    const query = { email: email };
    const decodedEmail = req.decoded.email;

    if (email !== decodedEmail) {
      res.status(403).json({ message: "Forbidden access!" });
    }

    const result = await Carts.find(query).exec();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addToCarts = async (req, res) => {
  const { name, desc, image, price, email, quantity, menuItemId } = req.body;

  try {

    const existingCartItem = await Carts.findOne({ email, menuItemId });

    if (existingCartItem) {
      return res
        .status(403)
        .json({ message: "Product already exists in the cart." });
    }

    const cartItem = await Carts.create({
      name,
      desc,
      image,
      price,
      email,
      quantity,
      menuItemId,
    });

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCart = async (req, res) => {
  const cartId = req.params.id;
  try {
    const deletedCart = await Carts.findByIdAndDelete(cartId);

    if (!deletedCart) {
      return res.status(404).json({ message: "Cart Items not found" });
    }

    res.status(200).json({ message: "Cart Items Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCart = async (req, res) => {
  const cartId = req.params.id;
  const { name, desc, image, price, email, quantity, menuItemId } = req.body;
  try {
    const updatedCart = await Carts.findByIdAndUpdate(
      cartId,
      { name, desc, image, price, email, quantity, menuItemId },
      { new: true, runValidators: true }
    );

    if (!updatedCart) {
      return res.status(404).json({ message: "Cart Item not found" });
    }

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleCart = async (req, res) => {
  const cartId = req.params.id;
  try {
    const cartItem = await Carts.findById(cartId);

    if (!cartItem) {
      return res.status(404).json({ message: "Cart Item not found" });
    }

    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: "Cart Item not found" });
  }
};

module.exports = {
  getCartByEmail,
  addToCarts,
  deleteCart,
  updateCart,
  getSingleCart,
};

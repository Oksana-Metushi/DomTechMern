const express = require('express');
const Carts = require('../models/Carts');
const router = express.Router();

const cartController = require('../controllers/cartControllers');

const verifyToken = require('../middlewares/verifyToken');
const verifyAdmin = require('../middlewares/verifyAdmin');

router.get('/',verifyToken, (req, res) => {
    cartController.getCartByEmail(req, res)
});
router.post('/', cartController.addToCarts);

router.delete('/:id', cartController.deleteCart)

router.put('/:id', cartController.updateCart);

router.get('/:id', cartController.getSingleCart);

module.exports = router;
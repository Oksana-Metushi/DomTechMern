const express = require('express');
const Menu = require('../models/Menu');
const router = express.Router();

const menuController = require('../controllers/menuControllers')

const verifyToken = require('../middlewares/verifyToken');
const verifyAdmin = require('../middlewares/verifyAdmin');

router.get('/', menuController.getAllMenuItems);

router.post('/', verifyToken, verifyAdmin, menuController.postMenuItem);

router.delete('/:id',verifyToken, verifyAdmin, menuController.deleteMenu);

router.get('/:id', menuController.singleMenuItem);

router.patch('/:id',verifyToken, verifyAdmin, menuController.updateMenuItem);

router.get('/get', menuController.getListings);


module.exports = router;
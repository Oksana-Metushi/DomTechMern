const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();

const blogController = require('../controllers/blogControllers')

const verifyToken = require('../middlewares/verifyToken');
const verifyAdmin = require('../middlewares/verifyAdmin');


router.get('/', blogController.getAllBlogItems);

router.post('/', verifyToken, verifyAdmin, blogController.postBlogItem);

router.delete('/:id',verifyToken, verifyAdmin, blogController.deleteBlog);

router.get('/:id', blogController.singleBlogItem);

router.patch('/:id',verifyToken, verifyAdmin, blogController.updateBlogItem);

module.exports = router;
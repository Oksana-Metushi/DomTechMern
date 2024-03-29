const Blog = require("../models/Blog");

const getAllBlogItems = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postBlogItem = async (req, res) => {
  const newBlog = req.body;
  try {
    const result = await Blog.create(newBlog);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
    const blogId = req.params.id;

    try {
        const deletedBlog = await Blog.findByIdAndDelete(blogId);     

        if (!deletedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json({ message: "Blog Item Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const singleBlogItem = async (req, res) => {
    const blogId = req.params.id;
    try {

        const blog = await Blog.findById(blogId);
        res.status(200).json(blog);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateBlogItem = async (req, res) => {
    const blogId = req.params.id;
    console.log(blogId)
  const { _id, name, desc, image, category, price, createdAt} = req.body;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
      {  name, desc, image, category, price},
      { new: true, runValidators: true }
    );

    console.log(updatedBlog)

    if (!updatedBlog) {
      return res.status(404).json({ message: "updated Item not found" });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBlogItems,
  postBlogItem,
  deleteBlog,
  singleBlogItem,
  updateBlogItem
};

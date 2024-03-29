const Menu = require("../models/Menu");

const getAllMenuItems = async (req, res) => {
  try {
    const menus = await Menu.find({}).sort({ createdAt: -1 });
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postMenuItem = async (req, res) => {
  const newMenu = req.body;
  try {
    const result = await Menu.create(newMenu);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMenu = async (req, res) => {
    const menuId = req.params.id;

    try {
        const deletedMenu = await Menu.findByIdAndDelete(menuId);

        if (!deletedMenu) {
            return res.status(404).json({ message: "Menu not found" });
        }

        res.status(200).json({ message: "Menu Item Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const singleMenuItem = async (req, res) => {
    const menuId = req.params.id;
    try {

        const menu = await Menu.findById(menuId);
        res.status(200).json(menu);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateMenuItem = async (req, res) => {
    const menuId = req.params.id;
    console.log(menuId)
  const { _id, name, desc, image, category, price, createdAt} = req.body;
  try {
    const updatedMenu = await Menu.findByIdAndUpdate(
        menuId,
      {  name, desc, image, category, price},
      { new: true, runValidators: true }
    );

    console.log(updatedMenu)

    if (!updatedMenu) {
      return res.status(404).json({ message: "updated Item not found" });
    }

    res.status(200).json(updatedMenu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllMenuItems,
  postMenuItem,
  deleteMenu,
  singleMenuItem,
  updateMenuItem
};

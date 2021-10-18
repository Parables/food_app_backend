import { CategoryModel } from "../models/category.js";
//GET all categories
const getAllCategories=async (req, res) => {
    try {
      const categoryList = await CategoryModel.find({}).populate('category');
      return res.json(categoryList);
    } catch (error) {
      console.log("Something went wrong: ", error);
      return res.status(400).send(`Failed to fetch data ${error}`);
    }
  }

  //GET all categories by category ID
  const getAllCategoriesByCategory=async (req, res) => {
    try {
      const categoryList = await CategoryModel.find({category: req.params.categoryID});
      return res.json(categoryList);
    } catch (error) {
      console.log("Something went wrong: ", error);
      return res.status(400).send(`Failed to fetch data ${error}`);
    }
  }

  const createCategory= async (req, res) => {
    try {
      const newCategory = await CategoryModel.create({ ...req.body });
      return res.json(newCategory);
    } catch (error) {
      console.log("Something went wrong: ", error);
      res.status(400).send("Failed to create new category");
    }
  }

  // PATCH a category
  const updateCategory=async (req, res) => {
    try {
      const updatedCategory = await CategoryModel.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true }
      );
      return res.json(updatedCategory);
    } catch (error) {
      console.log("Something went wrong: ", error);
      res.status(400).send("Failed to update category");
    }
  }

  //DELETE a category
  const deleteCategory= async (req, res) => {
    try {
      await CategoryModel.findByIdAndDelete(req.params.id);
      return res.send("category was deleted");
    } catch (error) {
      console.log("Something went wrong: ", error);
      res.status(400).send("Failed to deleted category");
    }
  }

  export {
      getAllCategories,
      getAllCategoriesByCategory,
      createCategory,
      deleteCategory,
      updateCategory
  }
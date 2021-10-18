import { FoodModel } from "../models/food.js";
//GET all foods
const getAllFoods=async (req, res) => {
    try {
      const foodList = await FoodModel.find({}).populate('category');
      return res.json(foodList);
    } catch (error) {
      console.log("Something went wrong: ", error);
      return res.status(400).send(`Failed to fetch data ${error}`);
    }
  }

  //GET all foods by category ID
  const getAllFoodsByCategory=async (req, res) => {
    try {
      const foodList = await FoodModel.find({category: req.params.categoryID});
      return res.json(foodList);
    } catch (error) {
      console.log("Something went wrong: ", error);
      return res.status(400).send(`Failed to fetch data ${error}`);
    }
  }

  const createFood= async (req, res) => {
    try {
      const newFood = await FoodModel.create({ ...req.body });
      return res.json(newFood);
    } catch (error) {
      console.log("Something went wrong: ", error);
      res.status(400).send("Failed to create new food");
    }
  }

  // PATCH a food
  const updateFood=async (req, res) => {
    try {
      const updatedFood = await FoodModel.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true }
      );
      return res.json(updatedFood);
    } catch (error) {
      console.log("Something went wrong: ", error);
      res.status(400).send("Failed to update food");
    }
  }

  //DELETE a food
  const deleteFood= async (req, res) => {
    try {
      await FoodModel.findByIdAndDelete(req.params.id);
      return res.send("food was deleted");
    } catch (error) {
      console.log("Something went wrong: ", error);
      res.status(400).send("Failed to deleted food");
    }
  }

  export {
      getAllFoods,
      getAllFoodsByCategory,
      createFood,
      deleteFood,
      updateFood
  }
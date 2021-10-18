import express from "express"
import { createFood, deleteFood, getAllFoods, getAllFoodsByCategory, updateFood } from "../controllers/foodControllers.js";

const route=express.Router()

route.route("/").get(getAllFoods).post(createFood)
route.route("/:id").patch(updateFood).delete(deleteFood)
route.route("/:categoryID").get(getAllFoodsByCategory)

export const foodRoutes = route;

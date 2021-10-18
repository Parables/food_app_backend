// import express from the express package we just installed
import express from "express";
import { connectMongoDB } from "./configs/db.js";
import {  CategoryModel } from "./models/category.js";
import {foodRoutes} from "./routes/foodRoutes.js"

// create a new instance of express
const app = express();
// get the body of a request using this middleware
app.use(express.json());
app.use("/foods",foodRoutes)
// server should listen to this port
const port = 5006;

app.get("/", (req, res) => {
  res.send("Welcome to Foody API");
});


// fetch all categorys
app.get("/categories", async (req, res) => {
  try {
    const categoryList = await CategoryModel.find({});
    return res.json(categoryList);
  } catch (error) {
    console.log("Something went wrong: ", error);
    return res.status(400).send(`Failed to fetch data ${error}`);
  }
});

// create a new category
app.post("/categories", async (req, res) => {
  try {
    const newCategory = await CategoryModel.create({ ...req.body });
    return res.json(newCategory);
  } catch (error) {
    console.log("Something went wrong: ", error);
    res.status(400).send("Failed to create new category");
  }
});

// update a category by id
app.patch("/categories/:id", async (req, res) => {
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
});

// delete a category by id
app.delete("/categories/:id", async (req, res) => {
  try {
    await CategoryModel.findByIdAndDelete(req.params.id);
    return res.send("category was deleted");
  } catch (error) {
    console.log("Something went wrong: ", error);
    res.status(400).send("Failed to deleted category");
  }
});


// start connection to MongoDB
connectMongoDB();

// start server to listen to request
app.listen(port, () => console.log("Server is up and running"));

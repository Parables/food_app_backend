// import mongoose from the package we installed
import mongoose from 'mongoose';

// extract these from the mongoose package
//pro tip: read more on array & object destructuring in JS
const {Schema, model} =mongoose;

// create a food schema
const foodSchema = Schema({
    image: String,
    foodName:  String,
    category: {type: Schema.Types.ObjectId, ref: 'categoryCollection'},
    price: Number,
    rating: Number,
    reviewsCount: Number,
    ingredients: String,
    description: String,
    madeBy: String,
});

// use the schema to create a model
// const FoodModel = model('foodCollection', foodSchema );


// this is an example of a named export(recommend)
export const FoodModel = model('foodCollection', foodSchema );

// this is an example of a default export
// export default FoodModel = FoodModel;
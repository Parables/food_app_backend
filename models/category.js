// import mongoose from the package we installed
import mongoose from 'mongoose';

// extract these from the mongoose package
//pro tip: read more on array & object destructuring in JS
const {Schema, model} =mongoose;

// create a category schema
const categorySchema = Schema({
    image: String,
    name:  String,
});

// use the schema to create a model
// const CategoryModel = model('categoryCollection', categorySchema );


// this is an example of a named export(recommend)
export const CategoryModel = model('categoryCollection', categorySchema );

// this is an example of a default export
// export default CategoryModel = CategoryModel;
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Category"
    }
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
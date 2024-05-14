import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a Post Title"]
    },
    description: {
        type: String,
        required: [true, "Please provide a Post Description"],
    },
    category:{
        type: String,
        required: [true, "Please provide a Post Description"],
    },
    metal:{
        type: String,
        required: [true, "Please provide a Post Description"],
    },
    imagesArray:{
        type: [{
            public_id:String,
            public_url:String
        }],
        required: [true, "Please provide a Post Description"],
    }
})

const Product = mongoose.models.products || mongoose.model("products", productSchema);

export default Product;
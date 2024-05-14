import {connect} from "@/dbConfig/dbConfig";
import Product from "@/models/productModel";
import { NextResponse } from "next/server";


connect()


export async function POST(request){
    try {
        const reqBody = await request.json()
        console.log(reqBody);
        const {title, description,  category, metal, imagesArray} = reqBody
        const newProduct = new Product({
            title,
            description,
            category,
            metal,
            imagesArray,
        })

        const savedProduct = await newProduct.save()

        return NextResponse.json({
            message: "PRoduct created successfully",
            success: true,
            savedProduct
        },
        {status: 200})

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}
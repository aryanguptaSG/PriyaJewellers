import {connect} from "@/dbConfig/dbConfig";
import Product from "@/models/productModel";
import { NextResponse } from "next/server";


connect()


export async function POST(request){
    const reqBody = await request.json()
    const {page = 1, limit = 20 , published, sortDirection = 'desc'} = reqBody
    const skip = (page - 1) * limit;
  
    try {
      const posts = await Product.find().exec()
  
        return NextResponse.json(posts);
    } catch (err) {
      console.error(err);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
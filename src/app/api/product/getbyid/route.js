import {connect} from "@/dbConfig/dbConfig";
import Product from "@/models/productModel";
import { NextResponse } from "next/server";


connect()


export async function POST(request){
    const reqBody = await request.json()
    console.log(reqBody);
    const {page = 1, limit = 20 , published, sortDirection = 'desc'} = reqBody
    const skip = (page - 1) * limit;
  
    try {
      const posts = await Product.find().where('_id').equals(reqBody.id).exec()
  
        return NextResponse.json(posts);
    } catch (err) {
      console.error(err);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
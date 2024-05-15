import {connect} from "@/dbConfig/dbConfig";
import Product from "@/models/productModel";
import { NextResponse } from "next/server";


connect()


export async function POST(request){
    try {
        return NextResponse.json({ error: 'Working Properly' }, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
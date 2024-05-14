import axios from "axios"

export const getAllProduct = async ()=>{
    let posts = await axios.post("/api/product/getall",{})
    let data = await posts.data
    console.log(data);
    return data
}

export const getProductByID = async (id)=>{
    let posts = await axios.post("/api/product/getbyid",{id})
    let data = await posts.data
    console.log(data);
    return data
}

export const addProduct = (product)=>{
    axios.post("/api/product/create",product).then(res=>{
        console.log(res);
    }).catch(error=>{
        console.log(error);
    })
}
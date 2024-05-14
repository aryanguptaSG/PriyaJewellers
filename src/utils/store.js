import axios from "axios"

export const getAllProduct = async ()=>{
    let posts = await axios.post("/api/product/getall",{})
    let data = await posts.data
    console.log(data);
    return data
    // let localStore = JSON.parse(localStorage.getItem("localStore"))
    // return localStore!=null ? localStore : []
}

export const getProductByID = async (id)=>{
    let posts = await axios.post("/api/product/getbyid",{id})
    let data = await posts.data
    console.log(data);
    return data
}

export const addProduct = (product)=>{
    // let localStore = JSON.parse(localStorage.getItem("localStore"))
    // localStore = localStore ? localStore : []
    // localStore.push(product)
    // localStorage.setItem("localStore",JSON.stringify(localStore))
    axios.post("/api/product/create",product).then(res=>{
        console.log(res);
    }).catch(error=>{
        console.log(error);
    })
}
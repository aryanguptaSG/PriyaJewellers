"use client"
import React,{useState, useEffect} from 'react'
import { getProductByID } from '@/utils/store';
import { CldImage } from 'next-cloudinary';


function ProductDetails({params}) {
    const [product,setProduct] = useState(null)

    const getProduct =  async ()=>{
      let data = await getProductByID(params.id)
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      setProduct(data[0])
    }

    useEffect(() => {
      getProduct()
    },[params.id])

    console.log('====================================');
    console.log("this is product",product);
    console.log('====================================');
    
  return (
    <>
    {
      product!=null && <div className='mt-10 mb-30 p-5 space-y-5'>
      <div className='grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-1 gap-5 mb-5'>
          {
              product.imagesArray.map((img,i)=>{
                  return <CldImage
                  key={i}
                  width="300"
                  height="300"
                  className='rounded-md shadow-box'
                  src={img.public_id}
                  sizes="100vw"
                  alt=""
                />
                
                
              })
          }
      </div>
      <h2 className='font-bold text-xl text-yellow-700 font-sans'>{product.title}</h2>
      <div className='space-y-3'>
        <p className='font-bold text-lg text-amber-900'>Product Details</p>
        <p className='md:w-4/5 text-justify'>{product.description}</p>
        <p className='my-2'>Category : <span className='shadow-box w-fit px-5 rounded-md py-1'> {product.category}</span></p>
        <p>Metal : <span className='shadow-box w-fit px-5 rounded-md py-1'> {product.metal}</span></p>
      </div>
  </div>
    }
    </>
  )
}

export default ProductDetails;
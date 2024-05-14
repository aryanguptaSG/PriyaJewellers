"use client"
import React,{useState,useEffect} from 'react'
import Dropdown from './Dropdown';
import { getAllCategory, getAllMetal } from '@/utils/commonFunc';
import { getAllProduct } from '@/utils/store';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

function Products({query}) {
    const [category, setCategory] = useState(query.category)
    const [metal, setMetal] = useState(query.metal)
    const [productsList, setProductsList] = useState([])

    const applyFilter = (dataToFilter)=>{
      let data = dataToFilter
      if(category && category != "Select Category" && category!= "All"){
        data = data.filter(item=>item.category==category)
      }
      if(metal && metal != "Select Metal" && metal!= "All"){
        data = data.filter(item=>item.metal==metal)
      }
      return data
    }

    const loadData = async ()=>{
      let data = await getAllProduct()
      setProductsList(_=>applyFilter(data))
    }
    useEffect(() => {
      loadData()
    }, [getAllProduct])

    useEffect(()=>{
     loadData()
    },[category,metal])
    
  return (
    <main className='mb-32'>
        <section className='flex justify-end space-x-5 p-10 flex-wrap'>
            <div>
             <Dropdown title="Select Category" selected={category} setSelected={setCategory} list={getAllCategory()}/>
            </div>
            <div>
                <Dropdown title="Select Metal" selected={metal} setSelected={setMetal} list={getAllMetal()}/>
            </div>
        </section>
        <div className='my-5 md:px-5 sm:px-2 grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-1 gap-5 px-5'>
          {
            productsList.map((item,index)=>{
              return <Link href={`/product/${item._id}`}>
                <div key={index} className='bg-[#F9F9F9] flex flex-col justify-center items-center space-y-5 rounded-sm p-10 shadow cursor-pointer'>
                  <div className='flex justify-center items-center'>
                  <CldImage
                    width="200"
                    height="200"
                    src={item.imagesArray[0].public_id}
                    sizes="100vw"
                    alt=""
                  />
                  </div>
                  <p className='font-bold text-lg text-gray-800'>{item.title}</p>
                  <p className='font-semibold text-sm text-gray-600 text-ellipsis line-clamp-1'>{item.description}</p>
                </div>
              </Link>
            })
          }
        </div>
    </main>
  )
}

export default Products;
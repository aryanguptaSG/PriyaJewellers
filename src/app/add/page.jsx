"use client"
import React,{useState} from 'react';
import { getAllCategory,getAllMetal} from '@/utils/commonFunc';
import Dropdown from '../components/Dropdown';
import { addProduct } from '@/utils/store';
import { useRouter } from 'next/navigation';
import { CldUploadWidget } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';

console.log(process.env.MONGO_URI);

function AddProduct() {
  const router = useRouter()
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Select Category")
  const [metal, setMetal] = useState("Select Metal")
  const [desc, setDesc] = useState("");
  const [images, setImages] = useState([]);
  const [showImages, setshowImages] = useState(false)

  const removeImage = (src)=>{
    const img = images.filter(img=> img!==src);
    console.log(img);
    setImages(img);
  }

  const createProduct = ()=>{
    let product = {
          title:title,
          description:desc,
          category:category,
          metal:metal,
          imagesArray:images
      }
    addProduct(product)
    router.push("/products")
  }

  return (
    <div className='px-5 py-10 space-y-5 mb-20'>
        <h1 className='font-semibold text-lg'>Add New Item</h1>
        <div>
        <h3>Title*</h3>
        <input type="text" className='border border-gray-400 rounded-lg px-2 py-1 w-full' placeholder='Gold Ring' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
      </div>

      <div>
        <h3>Description*</h3>
        <textarea type="text" className='border border-gray-400 rounded-lg px-2 py-1 w-full' placeholder='Write everything about product . ex- price , weight etc' value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
      </div>

      <div>
        <h3>Category</h3>
        <Dropdown title="Select Category" selected={category} setSelected={setCategory} list={getAllCategory()}/>
      </div>

      <div>
        <h3>Metal</h3>
        <Dropdown title="Select Metal" selected={metal} setSelected={setMetal} list={getAllMetal()}/>
      </div>

      {/* <div>
        <h3>Add Images</h3>
        <div className='flex md:space-x-2 flex-wrap space-y-1'>
        <input type="text" className='border border-gray-400 rounded-lg px-2 py-1 md:w-11/12 w-full' placeholder='https://' value={image} onChange={(e)=>{setImage(e.target.value)}}/>
        <button className='bg-green-700 text-white px-3 py-1 rounded-md text-xs' onClick={addImage}>Add Image</button>
        </div>
      </div> */}

      {/* <div>
        <h3>Add Images</h3>
        <div className='flex md:space-x-2 flex-wrap space-y-1'>
        <input type="file" multiple={true} accept="image/*" className='border border-gray-400 rounded-lg px-2 py-1 md:w-11/12 w-full' onChange={(e)=>{setImage(e.target.files)}}/>
        <button className='bg-green-700 text-white px-3 py-1 rounded-md text-xs' onClick={addImage}>Add Image</button>
        </div>
      </div> */}
       <CldUploadWidget uploadPreset="zc5dgs5p" onClose={(res,wid)=>{
          setshowImages(true)
        }} onSuccess={(res,wid)=>{
          console.log("on success called",res);
            if(res.event=="success"){
                images.push({
                  public_id:res.info.public_id,
                  public_url:res.info.url
              })
                setImages(images)
            }
        }}>
            {({ open }) => {
                return (
                <button className='mt-10' onClick={() => open()}>
                    Upload an Image
                </button>
                );
            }}
        </CldUploadWidget>

      <div className='grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-1 gap-5'>
      {showImages && images.map((item,i)=>{
        console.log('==================================== inside');
        console.log(images);
        console.log('====================================');
            return <div key={i} className='relative w-[300px] h-[300px]'>
              <svg onClick={()=>{removeImage(item)}} className="w-5 h-5 ml-2 absolute top-1 right-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
              <CldImage
                    width="300"
                    height="300"
                    src={item.public_id}
                    sizes="100vw"
                    alt=""
                  />
            </div>
          })}
      </div>

      <div className='flex justify-between'>
        <button onClick={createProduct} className='bg-green-700 px-3 py-1 rounded-md text-white' >Create Item</button>
      </div>
    </div>
  )
}

export default AddProduct;
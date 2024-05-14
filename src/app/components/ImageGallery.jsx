"use client"
import React , {useState} from 'react'
import useKeyPress from './useKeyPress';

function ImageGallery({
    setVisibility=()=>{},
    imageList = []
}) {
    const [curr, setCurr] = useState(0);

    const prev = () =>
    setCurr((curr) => (curr === 0 ?  imageList.length-1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === imageList.length - 1 ? 0 : curr + 1))

    useKeyPress("Enter",next)
  return (
    <div className='image-gallery md:p-10 p-2 pt-10'>
        <section className='flex justify-end mb-10'>
            <svg onClick={()=>{setVisibility(false)}} className="cursor-pointer w-6 h-6 bg-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </section>
        <div className={`overflow-hidden relative flex justify-center items-center flex-wrap`}>
        <img className='lg:w-9/12 md:w-[10/12] w-[11/12] shadow-box rounded-lg' src = {imageList[curr]} alt='poster'/>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                onClick={prev}
                className="h-[24px] w-[24px] flex justify-center items-center rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                {"<"}
                </button>
                <button
                onClick={next}
                className="h-[24px] w-[24px] flex justify-center items-center rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                {">"}
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                {imageList.map((_, i) => (
                    <div key={i}
                    className={`
                    transition-all w-3 h-3 bg-white rounded-full
                    ${curr === i ? "p-2" : "bg-opacity-50"}
                    `}
                    />
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageGallery
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Card({
    item
}) {
  return (
    <Link href={item.to}>
        <section className='bg-[#F9F9F9] flex flex-col justify-center items-center space-y-5 rounded-sm p-10 shadow'>
            <Image className='rounded-lg' width={200} src={item.img} alt=""/>
            <h3 className='text-[#CC9328] font-bold text-center'>{item.title}</h3>
            <p className='font-thin text-sm text-center'>{item.desc}</p>
        </section>
    </Link>
  )
}

export default Card;
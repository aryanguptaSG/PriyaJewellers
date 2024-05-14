import React from 'react'
import Navbar from './Navbar';
import Image from 'next/image';
import poster1 from "../../assets/poster1.png";
import poster3 from "../../assets/poster3.png";
import poster4 from "../../assets/poster4.png";
import Carousel from './Carousel';

function Header() {
  return (
    <header className='min-h-[500px] bg-[#202020]  text-white px-10 pb-10'>
        <section className='flex justify-between flex-wrap'>
            {/* <Image className='md:w-[50%] w-[100%]' src = {poster1}/> */}
            <Carousel className='md:w-[50%] w-[100%]' showbtns={false} autoSlide={true}>
                <Image src = {poster1} alt='poster'/>
                <Image src = {poster3} alt='poster'/>
                <Image src = {poster4} alt='poster'/>
            </Carousel>
            <section className='flex justify-center items-center md:w-[45%] w-[100%] flex-col space-y-5'>
                <h1 className='text-[#CC9328] font-extrabold font-serif text-4xl text-center'>
                    Priya Jewellers
                </h1>
                <h2 className='text-[#CC9328] font-serif text-2xl text-center'>Pammi Gupta</h2>
                <p className='font-thin tracking-wide w-4/5 text-justify'>At <b>Priya Jewellers</b>, we take pride in offering a wide range of jewelry collections, from timeless classics to contemporary designs. Our team of expert craftsmen and knowledgeable staff are always at your service, ready to assist you in finding the jewelry that reflects your unique style and celebrates life&apos;s most cherished moments.</p>
            </section> 
        </section>
    </header>
  )
}

export default Header;
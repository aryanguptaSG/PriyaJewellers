import React from 'react'
import logo from "../../assets/logo.svg";
import twitter from "../../assets/devicon_twitter.svg";
import whatsapp from "../../assets/whatsapp.svg";
import insta from "../../assets/instagram.svg";
import Image from 'next/image';


function Footer() {
  return (
    <footer id='contact-us' className='bg-[#202020] text-white py-10 px-5'>
        <section className='flex justify-center space-x-20'>
            <section className='space-y-2'>
                <p className='text-sm'>Phone : <span className='font-thin'>0987654322</span></p>
                <h2 className='text-sm font-thin'>Social Networks</h2>
                <div className='flex space-x-5'>
                    <Image width={24} src={twitter} alt='twitter'/>
                    <Image width={24} src={insta} alt='instagram'/>
                    <Image width={24} src={whatsapp} alt='whatsapp'/>
                </div>
            </section>
            <section>
                <Image className='cursor-pointer' width={150} src={logo} alt='logo'/>
            </section>
        </section>
        <p className='text-center mt-10 text-sm text-gray-400'>&copy; Copyright 2023-2024</p>
    </footer>
  )
}

export default Footer
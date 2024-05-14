"use client"
import React,{useState} from 'react'
import logo from "../../assets/logo.svg";
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
    const [showNavbar, setshowNavbar] = useState(false);
  return (
    <nav className='text-center py-5 px-10 bg-[#202020] text-white'>
        <section className='flex justify-between items-center'>
            <Link href="/"><Image width={100} src={logo} alt='logo'/></Link>
            <section className='w-1/2'>
                <ul className='hidden md:flex justify-between font-thin'>
                    <li> <Link href="/">Home</Link></li>
                    <li><Link href="/#products">Products</Link></li>
                    <li><Link href="/#about-us">About Us</Link></li>
                    <li><Link href="/#contact-us">Contact Us</Link></li>
                </ul>
                <div className="md:hidden text-right">
                    <button className="text-white" onClick={()=>{setshowNavbar(!showNavbar)}}>
                        {!showNavbar && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>}
                        {showNavbar && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>}
                    </button>
                </div>
            </section>
        </section>
        {
            showNavbar && 
            <section>
                <ul className='justify-between font-thin space-y-3' onClick={()=>{setshowNavbar(!showNavbar)}}>
                <li> <Link href="/">Home</Link></li>
                    <li><Link href="/#products">Products</Link></li>
                    <li><Link href="/#about-us">About Us</Link></li>
                    <li><Link href="/#contact-us">Contact Us</Link></li>
            </ul>
            </section>
        }
    </nav>
  )
}

export default Navbar;
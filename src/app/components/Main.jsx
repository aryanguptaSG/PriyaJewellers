import React from 'react';
import Card from './Card';
import g1 from "../../assets/c_ring.jpg";
import g2 from "../../assets/c_earrings.jpg";
import g3 from "../../assets/c_neckless.jpg";
import g4 from "../../assets/c_breslet.jpg";
import g5 from "../../assets/c_anklets.png";
import g6 from "../../assets/c_body.jpg";
import logo from "../../assets/logo.svg";
import Image from 'next/image';



function Main() {
    const data = [{
        img:g1,
        title:"Rings",
        desc: "Including engagement rings, wedding rings, and fashion rings.",
        to:"/products/Rings"
    },{
        img:g2,
        title:"Earrings",
        desc: "Including stud earrings, hoop earrings, and dangle earrings.",
        to:"/products/Earrings"
    },{
        img:g3,
        title:"Necklaces",
        desc: "Including pendant necklaces, chains, and chokers.",
        to:"/products/Necklaces"
    },{
        img:g4,
        title:"Bracelets",
        desc: "Including bangles, cuffs, and charm bracelets.",
        to:"/products/Bracelets"
    },{
        img:g5,
        title:"Anklets",
        desc: "Jewelry worn around the ankle.",
        to:"/products/Anklets"
    },{
        img:g6,
        title:"Body Jewelry",
        desc: "Including belly button rings and nose studs.",
        to:"/products/Other"
    }]
  return (
    <main>
        <section id='products' className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 py-10 lg:px-32 px-10'>
            {data.map((item,i)=>{
                return <Card key={i} item = {item}/>
            })}
        </section>
        <section id='about-us' className=' mt-14 p-5 md:pl-32 md:pt-32'>
            <div className='bg-white md:w-[600px] w-full p-10 space-y-5 rounded-md shadow-2xl'>
                <h2 className='font-bold text-lg text-right'>Owner&apos;s Message</h2>
                <p className='text-justify text-sm'>Welcome to <b>Priya Jewellers</b> , where elegance meets craftsmanship. We are delighted to have you as part of our extended jewelry family. Your presence is the most precious gem in our treasure trove.</p>
                <p className='text-justify text-sm'><b>Priya Jewellers</b> offers a diverse range of jewelry collections, from timeless classics to contemporary designs. The showroom&apos;s team of expert craftsmen and knowledgeable staff is ready to assist customers in finding jewelry that reflects their unique style and celebrates special moments. The owner promises continuous innovation and exceptional service to ensure customers&apos; experiences remain exceptional.</p>
                <p className='text-justify text-sm'>Thank you for choosing <b>Priya Jewellers</b> for your jewelry needs. We look forward to many more years of shared beauty, brilliance, and cherished memories.</p>
                <div>
                    <p className='text-justify text-sm'>Warmest regards,</p>
                    <Image width={100} src={logo} alt='logo'/>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Main;
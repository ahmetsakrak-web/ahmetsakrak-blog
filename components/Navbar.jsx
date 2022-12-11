import Link from 'next/link'
import React, { useState } from 'react'
import {FaBars,  FaRegWindowClose} from "react-icons/fa"

import { motion } from 'framer-motion'
import Image from 'next/image'

const Navbar = () => {

    const [toggle, setToggle]=useState({open:false, close:false})
 

    const navbarCSS='sm:hidden top-0 left-0 w-[80%] fixed h-screen justify-center rounded-md bg-opacity-90 bg-[#2b2f4c] z-20 items-center slide-in-left' 

    const links =[
        {
            id:1,
            link:"HAKKIMDA"
            
        },
        {
            id:2,
            link:"PROJELER"
        },
     /*    {
            id:3,
            link:"BLOG"
        },
    */
        {
            id:4,
            link:"İLETİŞİM"
        },
    ]


  return (
    <nav className='relative'> 
        <div className='p-4 mt-4'>
            <motion.div 
            initial={{
                opacity:0,
            }}
            animate={{
                opacity:1
            }}
            transition={{
                duration:2,
                delay:2
            }}
            className='flex justify-between items-center  w-[90%] mx-auto md:max-w-screen-xl '>
                <Link href="/#HOME" className='border-[5px] p-1 rounded-t-[45%] rotate-180 
                hover:rotate-0 transition duration-500 hover:bg-primary hover:border-primary '>
                   <h1 className='text-6xl mb-1'>
                    Ş
                   </h1>
                 
                </Link>

                <div>
                    <ul className='hidden sm:flex'>
                        {
                            links.map(link=>
                               (<Link key={link.id} href={`/#${link.link}`}>
                                    <li className='ml-10 text-sm uppercase cursor-pointer relative  duration-300 ease-out hover:scale-105 hover:text-blue-300 tracking-widest'>
                                       {link.link}
                                    </li>
                                </Link>))
                        }
                        
                       
                    </ul>
                   
                    <div  className='sm:hidden'>
                     {toggle.open 
                     ? <FaRegWindowClose  size={25} onClick={()=>(setToggle({open:false,close:true}))} />
                     : <FaBars onClick={()=>(setToggle({open:true,close:false}))}   size={25} /> }    
                    </div>
                   
                </div>
              
            </motion.div>
     
            


        </div>
        {
        (
            <div className={toggle.open ? navbarCSS : (toggle.close ? `${navbarCSS} slide-out-left` : "hidden")} 
                
            >
                        <ul className='flex flex-col py-4'>
                        {
                            links.map(link=>
                               (<Link className="mt-14 mx-12 " onClick={()=>(setToggle({open:false,close:true}))}   key={link.id} href={`/#${link.link}`}>
                              
                                    <li className='
                                    text-xl uppercase cursor-pointer tracking-wider 
                                    duration-300 ease-out text-center
                                     hover:text-blue-300 hover:tracking-widest '>
                                     {link.link}
                                    </li>
                                </Link>))
                        }
                        </ul>
                      
            </div>
        )}
    </nav>
  )
}

export default Navbar
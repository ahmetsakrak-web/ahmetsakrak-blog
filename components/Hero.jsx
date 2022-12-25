import React from 'react'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import {AiOutlineProfile} from "react-icons/ai"
import {TbBrandGmail} from "react-icons/tb"
import {FaGithub} from "react-icons/fa"
import { motion } from 'framer-motion'
import Link from 'next/link'


const Hero = () => {
  return (
    <div id='home' className='h-screen relative w-full flex text-center sm:items-center justify-center cursor-default'>
      
        <div className='mx-auto w-full h-[80%] flex flex-col justify-center sm:justify-start   '>
        
          <div className='text-left mt-12'>
            <motion.p
            initial={{
              y:-500,
              opacity:0,
              scale:0.5,
            }} 
            animate={{
              y:0,
              opacity:1,
              scale:1,
            }}
            transition={{
              duration:0.5
            }} 

            className='md:text-xl text-md text-primary tracking-wider mb-5'>
              Merhaba, Benim Adım 
            </motion.p>
            <motion.h1 
            initial={{
                    x:-500,
                    opacity:0,
                    scale:0.5,
            }} 
            animate={{
                x:0,
                opacity:1,
                scale:1,
            }}
            transition={{
                duration:1,
                delay:0.5
            }}
            className='md:text-6xl text-4xl mb-3 tracking-wide'>
              Ahmet Şakrak
            </motion.h1>
            <motion.h1 
            initial={{
                x:-500,
                opacity:0,
                scale:0.5,
            }} 
            animate={{
                x:0,
                opacity:1,
                scale:1,
            }}
            transition={{
                duration:1.5,
                delay:1
            }}
            className='baslik   text-blue-300 '>
              Full Stack Web Uygulamarı Geliştiriyorum.
          
            </motion.h1>

            <motion.div
              initial={{
                  opacity:0,
              }} 
              animate={{
                  opacity:1,
              }}
              transition={{
                duration:2,
                delay:2
              }}
                >
                <p className='max-w-lg'>
                  Fron-End odaklı bu uygulamaların yanı sıra web tasarım ve kullanıcını deneyimi tasarımıyla ilgiliyim.
                   {/*  <a href='/blog'><span  className='vurgu'> Bloğumda</span></a> hobi olarak felsefe içerikleri paylaşıyorum.     */}           
                </p>
                
                <ul className=' flex justify-left my-8'>
                          <Link href='/ahmetsakrakCV.pdf' target="_blank"  rel="noreferrer" className='hesap'>
                              <AiOutlineProfile  size={30} />
                          </Link>
                          <Link href='https://github.com/ahmetsakrak-web' target="_blank"  rel="noreferrer"  className='hesap ml-10'>
                              <FaGithub size={30}   />
                          </Link>   
                          <Link href='mailto:ahmetsakrak776@gmail.com' className='hesap ml-10'  >
                              <TbBrandGmail size={30}  />
                          </Link>
                              
                </ul> 
           
            </motion.div>
          </div>

       
        </div>
       
      
       
    </div>
  )
}

export default Hero
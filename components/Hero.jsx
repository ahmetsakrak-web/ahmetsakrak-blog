import React from 'react'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import {AiOutlineProfile} from "react-icons/ai"
import {TbBrandGmail} from "react-icons/tb"
import {FaGithub} from "react-icons/fa"
import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <div id='home' className='h-screen relative w-full flex text-center sm:items-center justify-center cursor-default'>
      
        <div className='mx-auto w-full h-[80%] flex flex-col '>
        
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
            className='baslik '>
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
                    <a href='/blog'><span  className='vurgu'> Bloğumda</span></a> hobi olarak felsefe içerikleri paylaşıyorum.               
                </p>
                <div className=' my-8 w-full flex'>
                    <p className='sm:text-lg  text-zinc-200'>Daha fazlası için <HiOutlineArrowNarrowRight size={30} className='inline  ' /></p>  
                </div>
                <ul className=' flex justify-left'>
                          <a href='/ahmetsakrakCV.pdf' target="_blank"  rel="noreferrer" className='hover:text-blue-300 cursor-pointer hover:scale-110  hover:mb-[4px] transition duration-500'>
                              <AiOutlineProfile  size={30} />
                          </a>
                          <a href='https://github.com/ahmetsakrak-web' target="_blank"  rel="noreferrer"  className='hover:text-blue-300 cursor-pointer hover:scale-110 ml-10 transition duration-500'>
                              <FaGithub size={30}   />
                          </a>   
                          <a href='mailto:ahmetsakrak776@gmail.com' className='hover:text-blue-300 cursor-pointer hover:scale-110 ml-10 transition duration-500'  >
                              <TbBrandGmail size={30}  />
                          </a>
                              
                </ul>
            </motion.div>
          </div>

       
        </div>
       
      
       
    </div>
  )
}

export default Hero
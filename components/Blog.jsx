import Link from 'next/link'
import React from 'react'
import { motion} from 'framer-motion'
import Image from 'next/image'


const Blog = () => {
    
  return (
    <motion.div 
    initial={{opacity:0,}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    viewport={{once:true}}
    className=' mt-10 mb-24 sm:mb-0'>
        <h1 className='baslik text-left '>
            Blog
      </h1> 
  
      <hr/>
        <div className='mainCardGroup'>

            <div className='verticalCardGroup'>
                <Link className='' href="#">
                    <div className='card hover:opacity-90 transition duration-200'>
                        
                        <div className='p-3'>
                            <h1 className='cardTitle'>
                                İLİŞKİLERİ OPTİMİZE ETMEK BU KADAR MI ZOR?
                            </h1>
                            <p className='text-sm leading-5'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita reprehenderit ullam inventore voluptas distinctio ab? Placeat facere incidunt molestias cum, obcaecati error, 
                            </p>
                            <div className=' bottom-2 left-0  mt-4'>
                                <label className='mr-2 text-purple-500'>Postmodernizm</label>
                                <label className='mr-2 text-blue-600'>Ontoloji</label>
                            </div>
                        </div>
                    </div>
                </Link>

            </div>


        </div>
        
        
    </motion.div>
  )
}

export default Blog
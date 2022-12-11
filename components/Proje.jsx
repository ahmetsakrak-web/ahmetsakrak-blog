import React from 'react'
import { motion} from 'framer-motion'
import Image from 'next/image'
const Proje = ({title, tools, description, src,href}) => {
  return (
    <motion.a 
    initial={{opacity:0,}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    viewport={{once:true}}
      href={href} target="_blank" className='relative'>
        <Image className=' h-[220px] sm:h-[250px]  ' height={220} width={450} src={src} alt='fate-condensed' />
        
        

        <div className='projectCSS bg-primary/90 h-[220px] sm:h-[250px] 
                   hover:bg-blue-900/70 transition duration-700 '>
                    <div className='view2 text-center '>
                            <h1 
                            className='  p-8 inline   rounded-md  text-[15px] bg-primary text-zinc-200 tracking-wider text-xl font-bold'>
                              GÖRÜNTÜLE</h1>
                    </div>


                    <div className='flex flex-col justify-around h-full  view1 '>
                      <div className='flex justify-between items-center mx-2 '>
                          <h1 className='text-secondary brightness-[2.9] tracking-wider w-[150px] '>{title}</h1>
                        <div>
                          {
                            tools.map((tool,i)=> <h1 key={i} className='text-blue-300  '>- {tool}</h1>)
                          }
                          
                          
                        </div>
                      </div>
                      <p className='mt-5'>
                        {description}
                      </p>
                    </div>
        </div>

    </motion.a>
  )
}

export default Proje
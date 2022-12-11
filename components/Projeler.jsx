import React from 'react'
import {motion} from 'framer-motion'
import Proje from './Proje'
import { data } from '../Db/projelerData'

const projeler = () => {
  return (
    <div className=' pb-10'>
        <motion.h1
       initial={{opacity:0,}}
       whileInView={{opacity:1}}
       transition={{duration:2}}
       viewport={{once:true}}
        className='baslik text-left mb-2'>
          Projeler
         
          </motion.h1>
          <hr />
          <div className='flex justify-center flex-wrap gap-10 my-10'>
            {
              data.map(item=>{
                return <Proje key={item.id} {...item} />
              })
            }
            
            
          </div>

    </div>
  )
}

export default projeler
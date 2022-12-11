import React from 'react'
import {FaDotCircle} from "react-icons/fa"

import { motion} from 'framer-motion'

const Hakkimda = () => {

    

  return (
    <motion.div 
    initial={{opacity:0,}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    viewport={{once:true}}
    className='h-screen relative mt-10 mb-24 sm:mb-0 '>
    
      <div className='h-screen flex flex-col sm:max-w-screen-lg cursor-default'>
      <h1 className='baslik text-left '>
       Hakkımda
         <hr/>
      </h1>
      <div className=' sm:rounded-md py-5 ' >
       <p>
        Merhaba! Benim adım Ahmet.
        Kullanıcı dostu web uygulamaları ve siteleri geliştiriyorum.
        Bu uygulamalarda kodun sadeliğini ve verimliliğini ön planda tutuyorum. Şuanda Word Exercise adında 
        kelime çalışmaları yapılabilecek bir full stack uygulama üzerinde çalışıyorum. 
         
        </p>
        <p className='mt-3'><span className='text-primary'> CSS</span>&apos;i uygulamak için kullandığım yapılar;</p>
        
        
        <div className='listComponent'>

            <div className='listGroup'>
                    <FaDotCircle  className="dotIcon" />
                    <span className='listItem'>Tailwind CSS</span>
            </div>

            <div className='listGroup'>
                    <FaDotCircle  className="dotIcon" />
                    <span className='listItem'>SASS</span>
            </div>

            <div className='listGroup'>
                    <FaDotCircle  className="dotIcon" />
                    <span className='listItem'>Material UI</span>
            </div>

            <div className='listGroup'>
                    <FaDotCircle  className="dotIcon" />
                    <span className='listItem'>Bootstrap</span>
            </div>

        </div>

        <p> 
            Kullandığım <span> Javascript </span> yapıları; 
        </p>

        <div className='listComponent' >

                <div className='listGroup'>
                        <FaDotCircle  className="dotIcon" />
                        <span className='listItem'>JQuery</span>
                </div>

                <div className='listGroup'>
                        <FaDotCircle  className="dotIcon" />
                        <span className='listItem'>ReactJS</span>
                </div>

                <div className='listGroup'>
                        <FaDotCircle  className="dotIcon" />
                        <span className='listItem'>Redux</span>
                </div>

                <div className='listGroup'>
                        <FaDotCircle  className="dotIcon" />
                        <span className='listItem'>NodeJS</span>
                </div>

                <div className='listGroup'>
                        <FaDotCircle  className="dotIcon" />
                        <span className='listItem' >ExpressJS</span>
                </div>


          </div>



      </div>
      </div>
    </motion.div>
  )
}

export default Hakkimda
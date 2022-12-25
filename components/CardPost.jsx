import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CardPost({title,categories,excerpt,featuredImage}) {
   
  return (
    <Link className="card " href="#" >
        <div  >
            <Image  width={1000} height={200} className="rounded-t-md h-[200px] object-cover"
            src={featuredImage.url} alt='img' />
            <div className='p-4 bg-primary mb-4 rounded-b-md'>
                <h1 className='cardTitle '>
                    {title}
                </h1>                               
                <div className='cardText ' dangerouslySetInnerHTML={{__html:excerpt}} />
                <div className='mt-4'>
                        {categories.map((item,i)=>{
                                                                            
                            return <label key={i} 
                                    className={`mr-2 text-md text-blue-300 `}>
                                        {item.name}
                                    </label>
                            })}                                               
                </div>
            </div>
        </div>
    </Link>
  )
}

export default CardPost
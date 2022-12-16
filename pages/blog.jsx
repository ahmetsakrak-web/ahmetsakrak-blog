import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { A } from '../Db/config'
import data from "../Db/blogData"

const BlogPage = () => {

    
    const [mainArray, setMainArray] = useState([]);
       
   
    useEffect(()=>{
        if(window.innerWidth < 515){
            setMainArray(A(1,data))
        }

        if(window.innerWidth < 924){
            setMainArray(A(2,data))
        }

        else if(window.innerWidth <= 1230){
            setMainArray(A(3,data))
        }
        else if(window.innerWidth > 1230){
            setMainArray(A(4,data))
        }
        
    },[])


    return (
        <div className='max-w-screen-xl h-screen mx-auto'>
            <h1 className='baslik text-center text-blue-300 py-4' >
                Blog
            </h1> 
            <div className='mainCardGroup'>
                {
                mainArray && mainArray.map((vGroup,i)=>{
                        return <div className='verticalCardGroup' key={i}> 
                                    {
                                        vGroup.map((post,i)=>{

                                            const  Rtext = `${post.text.substring(0, 150)}...`
                                                console.log(`card bg-${post.bg}`);
                                            return <Link  href="#" key={i}>
                                                        <div className={`card bg-${post.bg}`}>
                                                        <Image  width={450} height={1000} className="rounded-t-md"
                                                        src="https://c4.wallpaperflare.com/wallpaper/291/819/697/illustration-city-anime-painting-wallpaper-preview.jpg" alt='img' />
                                                            <div className='p-3 '>
                                                                <h1 className='cardTitle'>
                                                                   {post.title}
                                                                </h1>
                                                                
                                                                <div className='cardText' dangerouslySetInnerHTML={{__html:Rtext}}>

                                                                </div>

                                                                <div className=' bottom-2 left-0  mt-4 '>
                                                                    {post.category.map((item,i)=>{
                                                                        
                                                                        return <label key={i} 
                                                                        className={`mr-2 p-1 text-sm rounded-md bg-secondary text-white`}>
                                                                            {item.theme}
                                                                        </label>
                                                                    })}
                                                                    
                                                                   
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                        })
                                    }
                               </div>
                    })
                }

            </div>   
        </div>
    )
}

export default BlogPage


{/* <Link  href="#">
<div className='card hover:scale-105 hover:bg-blue-300 transition duration-200'>
    
    <div className='p-3'>
        <h1 className='cardTitle'>
            POSTMODERNİZM
        </h1>
        <Image width={450} height={300} src="https://c4.wallpaperflare.com/wallpaper/291/819/697/illustration-city-anime-painting-wallpaper-preview.jpg" />
        <p className='text-sm leading-5 my-2'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita reprehenderit ullam inventore voluptas distinctio ab? Placeat facere incidunt molestias cum, obcaecati error, 
        </p>
        <div className=' bottom-2 left-0  mt-4'>
            <label className='mr-2 text-purple-500'>Postmodernizm</label>
            <label className='mr-2 text-blue-600'>Ontoloji</label>
        </div>
    </div>
</div>
</Link> */}
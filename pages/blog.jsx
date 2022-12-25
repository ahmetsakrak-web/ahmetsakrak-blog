
import Link from 'next/link'
import React from 'react'
import CardPost from '../components/CardPost'
import Navbar from '../components/Navbar'

import  { getPosts } from "../Db/blogData"

const BlogPage = ({posts}) => {


    
 

    /* const  Rtext = `${post.text.substring(0, 150)}...` */

    return (
        <div className='max-w-screen-xl mx-auto'>
                <div className='mb-24'>

                
                <Navbar />
                </div>
                    
                   
                    <div className='main'>
                    <div className='cardGroup ' > 
                        {
                      posts.map(({node},i)=>{
                      console.log(node);
                        return  <CardPost {...node} key={i} />
                                         
                                      
                            })
                        }
                    </div>
                        <div className='rightSide'>
                            <div className='categoryComponent'>
                                <h1 className='text-2xl mb-2 '>Kategoriler</h1>
                                <div className='categories'>
                                    <h1 className='category '>Matematik</h1>
                                    <h1 className='category'>Sosyoloji</h1>
                                    <h1 className='category'>Piskoloji</h1>
                                    <h1 className='category'>Biyoloji</h1>
                                </div>
                            </div>
                        </div>
                    </div>   
         
        </div>
    )
}


export async function getStaticProps(){
    const posts =( await getPosts()) || [];
    return {
        props:{ posts }
    }
   }

export default BlogPage



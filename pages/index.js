import Head from 'next/head'
import Hakkimda from '../components/Hakkimda'
import Hero from '../components/Hero'
import Portfolio from '../components/Projeler'
import Navbar from "../components/Navbar"
import Iletisim from '../components/Iletisim'
import Blog from '../components/Blog'


export default function Home() {
  return (
    <div className='h-screen overflow-scroll overflow-x-hidden scroll-smooth '>
      <Head>
        <title>Ahmet Şakrak - Front-End Geliştirici</title>
        <meta name="description" content="Ahmet Şakrak Kişisel Web Sitesi" />
        <meta charset="UTF-8" />
        <link rel="shortcut icon" href="favicon.png" />
        
      </Head>
      <Navbar />
    <div className='lg:max-w-screen-lg md:max-w-screen-md  sm:max-w-[500px] w-[90%] mx-auto p-4'>
        <section id='ANASAYFA' >
          <Hero />
        </section>

        <section id='HAKKIMDA' >
            <Hakkimda />
        </section>
        
        <section id='PROJELER' >
            <Portfolio />
        </section>

       {/*  <section id='BLOG' >
            <Blog />
        </section>
 */}
        <section id='İLETİŞİM' >
            <Iletisim />
        </section>
  </div>
    


       

    </div>
  )
}

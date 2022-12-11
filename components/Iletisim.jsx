import React from 'react'
import { useForm } from 'react-hook-form';
import { motion} from 'framer-motion'

const Iletisim = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit=(data)=>{
    window.location.href = `mailto:ahmetsakrak776@gmail.com?subject=${data.title}&body=Gönderenin Adı: ${data.name} Gönderilen Mesaj:${data.text}`;
  }

  return (
    <motion.div
    initial={{opacity:0,}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
    viewport={{once:true}} 
    className='h-screen py-10 relative'>
        <h1 className='baslik text-left '>İletişime Geç</h1>
        <hr/>
        <h1></h1>
        <form className='form' autoComplete='off' spellCheck="false" onSubmit={handleSubmit((data) => onSubmit(data))}>
            <input className='iletisimInput' type="text" {...register('name')} placeholder='İsim'/>
            <input className='iletisimInput' type="text" {...register('title')} placeholder='Konu Başlığı'/>
            <textarea rows={6} className='iletisimInput iletisimArea' type="text" {...register('text')} placeholder='Metin'/>
            <button className='iletisimButon'  type="submit" name=''> Gönder</button>
        </form>

        <footer className='absolute bottom-10  w-full text-center' >
          <a href='https://github.com/ahmetsakrak-web/ahmetsakrak-blog' target="_blank"  rel="noreferrer" className='text-sm  cursor-pointer text-primary hover:text-white transition duration-300'>Ahmet Şakrak Tarafından Tasarlandı & Geliştirildi</a>
        </footer>
    </motion.div>
  )
}

export default Iletisim
import React from 'react'
import mainImageDesktop from '../assets/image-web-3-desktop.webp'
import mainImageMobile from '../assets/image-web-3-mobile.webp'

function Main() {
  return (
    <section className='flex flex-col gap-6'>
      <div>
        <picture>
          <source media='(min-width:76.8rem)' srcSet={mainImageDesktop} />
          <img src={mainImageMobile} alt='' />
        </picture>
      </div>
      <div className='flex flex-col gap-6 md:flex-row'>
        <h1 className='text-secondary font-black text-5xl basis-1/2'>
          The Bright Future of Web 3.0?
        </h1>
        <div className='flex flex-col gap-6 basis-1/2'>
          <p className='text-slate-800 opacity-80 leading-relaxed -z-10'>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <a
            href='#'
            className=' bg-primary-dark text-white uppercase tracking-[0.3em] py-3 px-8 font-bold text-sm w-max hover:bg-secondary transition-all duration-300 ease-in-out'
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Main

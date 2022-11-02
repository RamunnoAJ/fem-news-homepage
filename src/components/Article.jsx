import React from 'react'

function Article({ title, text, id, image, alt }) {
  return (
    <div className='flex gap-4'>
      <img src={image} alt={alt} className='w-16 basis-2/5' />
      <div className='basis-3/5 flex flex-col justify-evenly'>
        <span className=' text-3xl font-bold tracking-wide text-gray-400'>
          {`0${id}`}
        </span>
        <h3 className='text-secondary hover:text-primary-dark cursor-pointer font-extrabold text-lg'>
          {title}
        </h3>
        <p className='text-slate-800 opacity-80'>{text}</p>
      </div>
    </div>
  )
}

export default Article

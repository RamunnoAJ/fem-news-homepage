import React from 'react'

function New({ title, text, id }) {
  return (
    <>
      <h2 className='text-white hover:text-primary-light font-bold text-xl cursor-pointer'>
        {title}
      </h2>
      <p className='text-gray-400'>{text}</p>
    </>
  )
}

export default New

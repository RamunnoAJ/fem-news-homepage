import React from 'react'

function New({ title, text, id }) {
  return (
    <>
      <h3 className='text-white hover:text-primary-light font-bold text-xl cursor-pointer'>
        {title}
      </h3>
      <p className='text-gray-400'>{text}</p>
    </>
  )
}

export default New

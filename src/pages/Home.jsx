import React from 'react'
import NavBar from '../components/NavBar'
import Main from '../components/Main'
import News from '../components/News'
import Articles from '../components/Articles'

function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <div className='w-11/12 max-w-7xl flex flex-col mx-auto md:grid md:grid-cols-3 gap-6'>
          <div className='col-span-2'>
            <Main />
          </div>
          <div className='bg-secondary'>
            <News />
          </div>
          <div className=' col-span-3 mb-6'>
            <Articles />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

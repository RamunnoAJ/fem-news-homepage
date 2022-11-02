import React from 'react'
import NavBar from '../components/NavBar'
import Main from '../components/Main'

function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <div className='w-11/12 max-w-7xl mx-auto md:grid md:grid-cols-3'>
          <Main />
        </div>
      </main>
    </div>
  )
}

export default Home

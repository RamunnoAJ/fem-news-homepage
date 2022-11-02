import React from 'react'
import New from './New'

const news = [
  {
    id: 1,
    title: 'Hydrogen VS Electric Cars',
    text: 'Will hydrogen-fueled cars ever catch up to EVs?'
  },
  {
    id: 2,
    title: 'The Downsides of AI Artistry',
    text: 'What are the possible adverse effects of on-demand AI image generation?'
  },
  {
    id: 3,
    title: 'Is VC Funding Dryng Up?',
    text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
  }
]

function News() {
  return (
    <section className='bg-secondary px-6 py-4 md:py-0 flex flex-col gap-8 h-full justify-center'>
      <h2 className='text-primary-light font-bold text-4xl'>New</h2>

      {news.map((notice) => (
        <article
          key={notice.id}
          className='border-gray-700 border-b pb-6 last:border-none'
        >
          <New
            title={notice.title}
            text={notice.text}
            className='flex flex-col gap-4'
          />
        </article>
      ))}
    </section>
  )
}

export default News

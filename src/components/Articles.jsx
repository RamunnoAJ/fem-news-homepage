import React from 'react'
import Article from './Article'

import image1 from '../assets/image-retro-pcs.webp'
import image2 from '../assets/image-top-laptops.webp'
import image3 from '../assets/image-gaming-growth.webp'

const articles = [
  {
    id: 1,
    title: 'Reviving Retro PCs',
    text: 'What happens when old PCs are given modern upgrades?',
    image: image1,
    alt: 'Image of a pc of the 90s'
  },
  {
    id: 2,
    title: 'Top 10 laptops of 2022',
    text: 'Our best picks for various needs and budgets.',
    image: image2,
    alt: 'Image of a keyboard zoomed'
  },
  {
    id: 3,
    title: 'The Growth of Gaming',
    text: 'How the pandemic has sparked fresh opportunities.',
    image: image3,
    alt: 'Image of a playstation controller floating'
  }
]

function Articles() {
  return (
    <section className='grid md:grid-cols-3 md:col-span-3 gap-6'>
      {articles.map((article) => (
        <article key={article.id}>
          <Article
            title={article.title}
            text={article.text}
            image={article.image}
            alt={article.alt}
            id={article.id}
          />
        </article>
      ))}
    </section>
  )
}

export default Articles

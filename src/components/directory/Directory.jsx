import React, { useState } from 'react'
import './Directory.scss'

import MenuItem from '../menu-item/MenuItem'


const Directory = ({ title, subtitle }) => {
  const [sections] = useState([
    {
      id: 1,
      title: 'hats',
      imageUrl: 'http://localhost:8888/hats.jpg'
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'http://localhost:8888/jackets.jpg'
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'http://localhost:8888/sneakers.jpg'
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'http://localhost:8888/womens.jpg',
      size: 'large'
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'http://localhost:8888/mens.jpg',
      size: 'large'
    },
  ])

  return (
    <div className='directory-menu'>
      {sections.map(({ id, title, imageUrl, size }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size} />
      ))}
    </div>
  )
}

export default Directory
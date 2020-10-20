import React, { useState } from 'react'
import './ShopPage.scss'

import CollectionPreview from '../../components/collection-preview/CollectionPreview'
import SHOP_DATA from './shopData'


const ShopPage = () => {
  const [collections] = useState(SHOP_DATA)

  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default ShopPage
import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../../components/collection-preview/CollectionPreview'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import './CollectionOverview.scss'


const CollectionOverview = ({ collections }) => {
  console.log(collections)
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)
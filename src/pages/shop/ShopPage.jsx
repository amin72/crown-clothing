import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'

import CollectionOverview from '../../components/collection-overview/CollectionOverview'
import CollectionPage from '../collection/CollectionPage'
import WithSpinner from '../../components/spinner/WithSpinner'

import './ShopPage.scss'


const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionsPagewWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  unsubscribeFromSnapShot = null

  state = {
    loading: true
  }

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    collectionRef.get().then(snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionMap)
      this.setState({ loading: false })
    })
  }

  render() {
    const { match } = this.props
    const { loading } = this.state

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={props => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
        <Route path={`${match.path}/:categoryId`} render={props => <CollectionsPagewWithSpinner isLoading={loading} {...props} />} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
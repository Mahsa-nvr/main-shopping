import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectShopItems } from '../../redux/shop/shop.selector';

const CollectionPage = ({collections}) => {
    let params = useParams()
    const test = collections.find(collect => collect.routeName === params.collection)
    console.log('yes',test)
    return (
        <div>collection page</div>
    )
}

const mapStateToProps = (state) => ({
  collections : selectShopItems(state),
})

export default connect(mapStateToProps)(CollectionPage);
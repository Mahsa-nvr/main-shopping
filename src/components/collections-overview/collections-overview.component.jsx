import React from 'react';
import { connect } from 'react-redux';
import  { selectShopItems }  from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-overview.styles.css';
const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>{
        collections.map(({id, ...otherCollections}) => (
              <CollectionPreview key={id}  {...otherCollections} />
        ))
    }
    </div>
)

const mapStateToProps = state => ({
    collections : selectShopItems(state)
})

export default connect(mapStateToProps)(CollectionsOverview);
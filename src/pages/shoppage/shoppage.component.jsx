import React from 'react';
import { connect } from 'react-redux';
import  { selectShopItems }  from '../../redux/shop/shop.selector';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = ({ collections }) => {
    return (
    <div className='shop-page'>
        {
            collections.map(({id, ...otherCollections}) => (
                  <CollectionPreview key={id}  {...otherCollections} />
            ))
        }
    </div>
)}

const mapStateToProps = state => ({
    collections : selectShopItems(state)
})

export default connect(mapStateToProps)(ShopPage);

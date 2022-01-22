import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = () => (
    <div className='shop-page'>
        {
            SHOP_DATA.map(({id, ...otherCollections}) => (
                  <CollectionPreview key={id}  {...otherCollections} />
            ))
        }
    </div>
)

export default ShopPage;

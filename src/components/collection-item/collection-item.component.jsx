import React from 'react';
import './collection-item.styles.css';
import CustomButton from '../customButton/CustomButton.component';
const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className='collection-item'>
        <div
          className='image'
          style= {{
              backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}$</span>
        </div>
        {/* <CustomButton title="Add to cart" className="add_to_cart_btn"/> */}
    </div>
);

export default CollectionItem;
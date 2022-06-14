import React from 'react';
import { connect } from 'react-redux';
import { clearItem, removeItem, addItem } from '../../redux/cart/cart.action';
import './checkoutItem.styles.css';

const CheckoutItem = ({cartItems, clearCartItems, removeItem, addItem}) => {
const {imageUrl, name, price, quantity} = cartItems;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="item"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=> removeItem(cartItems)}>&#10094;</div>
                  <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=> addItem(cartItems)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={() => clearCartItems(cartItems)}>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearCartItems : item  => dispatch(clearItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
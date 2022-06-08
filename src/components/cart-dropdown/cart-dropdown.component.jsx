import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../customButton/CustomButton.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.css';

const CartDropDown = ({ cartItems }) => {
    return (
      <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem}/>
        ))}
      </div>
      <CustomButton title='GO TO CHECKOUT' className='btn_checkout'/>

  </div>
)}

const mapStateToProps = ({ cart: {cartItems }}) => ({
cartItems
})

export default connect(mapStateToProps)(CartDropDown);
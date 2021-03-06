import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import CustomButton from '../customButton/CustomButton.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCardHidden } from '../../redux/cart/cart.action';
import './cart-dropdown.styles.css';

const CartDropDown = ({ cartItems , dispatch}) => {
 const navigate = useNavigate();
 const  checkoutBtn = ()=> {
  dispatch(toggleCardHidden());
  navigate('/checkout')  
 }
    return (
      <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem}/>
        ))}
      </div>
      <CustomButton title='GO TO CHECKOUT' className='btn_checkout' onClick={checkoutBtn}/>

  </div>
)}

const mapStateToProps = (state) => ({
cartItems : selectCartItems(state),
})

export default connect(mapStateToProps)(CartDropDown);
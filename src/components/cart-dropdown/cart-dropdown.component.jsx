import React from 'react';

import CustomButton from '../customButton/CustomButton.component';
import './cart-dropdown.styles.css';

const CartDropDown = () => {
    return (
      <div className='cart-dropdown'>
      <div className='cart-items'/>
      <CustomButton title='GO TO CHECKOUT' />

  </div>
)}

export default CartDropDown;
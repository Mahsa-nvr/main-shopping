import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkoutItems.component';
import './checkoutpage.styles.css';

const CheckoutPage = ({cartItems, total}) => {
    
    return (
        <div className='checkout-page'>
            <div className='checkout-header'> 
              <div className="header-block">
                <span>product</span>
              </div>
              <div className="header-block">
                <span>description</span>
              </div>
              <div className="header-block">
                <span>quantity</span>
              </div>
              <div className="header-block">
                <span>price</span>
              </div>
              <div className="header-block">
                <span>remove</span>
              </div>
            </div>
            {cartItems.map(cartItems => <CheckoutItem key={cartItems.id} cartItems={cartItems}/>)}
            <div className='total'>Total: ${total}</div>
        </div>
    )
}
const mapStateToProps = state => ({
    cartItems : selectCartItems(state),
    total: selectCartTotal(state),
})

export default connect(mapStateToProps)(CheckoutPage);

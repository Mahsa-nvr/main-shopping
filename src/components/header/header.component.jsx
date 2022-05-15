import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.css';

const Header = (props) => {
  const { currentUser } = props;
  console.log('currentUser in header', currentUser);
    return (
        <div className='header'>
            <Link to='/' className='logo-container' >
              <Logo />
            </Link>
            <div className='options'>
              <Link className='option' to='/shop'  href=''>
                SHOP
              </Link>
              <Link className='option' to='/shop'  href=''>
                CONTACT
              </Link>
              {
                
                currentUser?
                <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
                : 
                <Link className='option' to='/signIn'  href=''>
                SIGN IN
              </Link>
              }
               <CartIcon />
            </div> 
            <CartDropDown />       
        </div>
    )
}

const mapStateToProps = state =>  ({
 currentUser : state.user.currentUser
})
export default connect(mapStateToProps)(Header);
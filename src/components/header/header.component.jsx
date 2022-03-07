import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.css';

const Header = (props) => {
  const { currentUser } = props;
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
            </div>
        </div>
    )
}
export default Header;
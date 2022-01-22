import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.css';

const Header = () => {
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
            </div>
        </div>
    )
}
export default Header;
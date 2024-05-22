import React from 'react';
import { Fragment, useContext } from 'react';
import {Outlet, Link} from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.componenet';
import CartDropdown from '../../components/cart-dropdown/cart-dropdwon.component';
import logoImage from '../../assets/logo.png';
import { UserContext } from '../../components/contexts/user.context';
import { CartContext } from '../../components/contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';
 
const Navigation = ()=>{
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } =useContext(CartContext);
  

  return(
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={logoImage} alt="logo.png" />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop' >
            SHOP
          </Link>
          {currentUser ?(
              <span className='nav-link' onClick={signOutUser}> 
              {''}
              SIGN OUT{''}
              </span>
           ) :(
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
            )
          }
          <CartIcon/>
        
        </div>
        {isCartOpen && <CartDropdown/>} 
      </div>
      <Outlet />

    </Fragment>
  )
}

export default Navigation;
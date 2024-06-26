import React from 'react';
import { Fragment, useContext } from 'react';
import {Outlet, Link} from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.componenet';
import CartDropdown from '../../components/cart-dropdown/cart-dropdwon.component';
import logoImage from '../../assets/logo.png';
import { UserContext } from '../../components/contexts/user.context';
import { CartContext } from '../../components/contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import {NavigationContainer, NavLinks, NavLink, LogoContainer} from './navigation.styles';
 
const Navigation = ()=>{
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } =useContext(CartContext);
  

  return(
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <img src={logoImage} alt="logo.png" />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop' >
            SHOP
          </NavLink>
          {currentUser ? (
              <NavLink as='span' onClick={signOutUser}> 
              {''}
              SIGN OUT{''}
              </NavLink>
           ) :(
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
            )
          }
          <CartIcon/>
        
        </NavLinks>
        {isCartOpen && <CartDropdown/>} 
      </NavigationContainer>
      <Outlet />

    </Fragment>
  )
}

export default Navigation;
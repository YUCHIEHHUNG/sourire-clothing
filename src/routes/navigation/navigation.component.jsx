import React from 'react';
import { Fragment } from 'react';
import {Outlet, Link} from 'react-router-dom';
import logoImage from '../../assets/logo.png';
import './navigation.styles.scss';
 
const Navigation = ()=>{
  return(
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={logoImage} alt="logo.png" />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='./shop' >
            SHOP
          </Link>
          <Link className='nav-link' to='./sign-in' >
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />

    </Fragment>
  )
}

export default Navigation;
import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
height: 100px; 
width: 100%; 
display: flex; 
justify-content: space-between; 
align-items: center; 
margin-bottom: 25px; 
`;

export const LogoContainer = styled(Link)`
height: 100%;
display: flex; /* Add this to enable flexbox for children */
align-items: center; /* Center the logo vertically */

img {
  height: 100%;
  position: relative;
}
`

export const NavLinks = styled.div`
  width:50%;
  height:100%;
  display:flex;
  justify-content: flex-end;
  align-items: center;
`

export const NavLink = styled(Link)`
   padding: 10px 15px; 
   cursor: pointer; 

`;
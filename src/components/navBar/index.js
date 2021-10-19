/*
 *
 * NavBar
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import {
  StyledNavBar,
  StyledNavBarTopHeaderRow,
  StyledNavBarBottomHeaderRow,
  StyledActionBar,
  StyledLogo,
} from './styledComponents';
import Logo from '../../assets/betway.svg';

function NavBar({ menu, activeIndex ,onSelect}) {
  const [activeColor] = useState(menu.color);
  return (
    <StyledNavBar>
      <StyledNavBarTopHeaderRow>
        <div>
          <StyledLogo>
            <a href='/'>
              <img src={Logo} alt='logo'></img>
            </a>
          </StyledLogo>
        </div>
        <StyledActionBar color={activeColor}>
          {menu && <Button>{menu.loginLabel}</Button>}
          {menu && <Button>{menu.signupLable}</Button>}
        </StyledActionBar>
      </StyledNavBarTopHeaderRow>
      {menu && (
        <StyledNavBarBottomHeaderRow color={activeColor}>
          {menu.menuList.map((menuItem, index) => {
            return (
              <div
                className={activeIndex === index ? 'active' : ''}
                key={index}
                onClick={()=>onSelect(index)}
              >
                {menuItem.title}
              </div>
            );
          })}
        </StyledNavBarBottomHeaderRow>
      )}
    </StyledNavBar>
  );
}

export default NavBar;

NavBar.propTypes = { menu: PropTypes.object, activeIndex: PropTypes.number };

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';
import { nav_items } from '../constants/menu_items';
import logo from '../assets/ic_glendalough.svg';
import shop_logo from '../assets/ic_shop.svg';
import cross_logo from '../assets/ic_cross.svg';

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index 1001;
  pointer-events: none;
`;
// LogoContainer = deprecated
const LogoContainer = styled.div`
  img{
    -webkit-filter: invert(1); 
    filter: invert(1);
  }
`;
const NavPrimary = styled.nav`
  margin-left: 2vw;
  a {
    pointer-events: all;
    color: ${COLOR.black};
    border-bottom: 1px dotted transparent;
    font-family: ${FONT.sans};
    font-weight: 500;
    font-style: 'normal';
    text-transform: uppercase;
    letter-spacing: 0.1rem; 
  }
  a:hover, a:focus, a:active, a.active {
    color: ${COLOR.black};
    border-bottom: 1px dotted ${COLOR.black};
  }
  .nav-link img {
    -webkit-filter: none; 
    filter: none;
  }
  &.home-page-0, &.home-page-3, &.home-page-5,
  &.stories-page-0, &.stories-page-4,
  &.story-page-4,
  &.gins-page-0, &.gins-page-4, &.gins-page-5,
  &.gin-page-5,
  &.whiskeys-page-0, &.whiskeys-page-4, &.whiskeys-page-5,
  &.whiskey-page-0, &.whiskey-page-4, &.whiskey-page-5,
  &.cocktails-page-0, &.cocktails-page-4, &.cocktails-page-5,
  &.cocktail-page-0,
  &.features-page-0, &.features-page-4, &.features-page-5,
  &.feature-page-2, &.feature-page-3 {
      a {
        color: ${COLOR.white};
      }
      a:hover, a:focus, a:active, a.active {
        color: ${COLOR.white};
        border-bottom: 1px dotted ${COLOR.white};
      }
      .nav-link img {
        -webkit-filter: invert(1); 
        filter: invert(1);
      }
  }
`;

const ShopLogoContainer = styled.div`
  margin-right: 2vw;
  img{
    -webkit-filter: invert(1); 
    filter: invert(1);
  }
  &.home-page-0, &.home-page-3, &.home-page-5,
  &.stories-page-0, &.stories-page-4,
  &.story-page-4,
  &.gins-page-0, &.gins-page-5,
  &.gin-page-2,
  &.whiskeys-page-0, &.whiskeys-page-5,
  &.whiskey-page-4, &.whiskey-page-5,
  &.cocktails-page-0, &.cocktails-page-4, &.cocktails-page-5,
  &.cocktail-page-0,
  &.features-page-0, &.features-page-4, &.features-page-5,
  &.feature-page-2, &.feature-page-3 {
    img{
      -webkit-filter: none; 
      filter: none;
    }
  }
`;

const NavPanel = ({ className, currentPage }) => {

  const navItems = nav_items.map((item, i) => (
    <li key={i} className="nav-item">
      <Link to={item.url} className="nav-link">
        {item.title}
      </Link>
    </li>
  ));
 
  return (
    <NavContainer className={`${className} d-flex justify-content-between align-items-center`}>
      <NavPrimary className={`${currentPage}`}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <img src={cross_logo} className="cross-logo" alt="Glendalough cross logo" />
            </Link>
          </li>
          { navItems }
        </ul>
      </NavPrimary>
      <LogoContainer className={`${currentPage}`} hidden>
        <img src={logo} className="nav-logo" alt="Glendalough logo" />
      </LogoContainer>
      <ShopLogoContainer className={`d-flex align-items-center ${currentPage}`}>
        <img src={shop_logo} className="nav-logo-shop" alt="Glendalough shop logo" />
      </ShopLogoContainer>
    </NavContainer>
  )
};

NavPanel.propTypes = {
  className: PropTypes.string,
  currentPage: PropTypes.string,
};

export default NavPanel;
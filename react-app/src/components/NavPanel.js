import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';
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
const LogoContainer = styled.div`
img{
  -webkit-filter: invert(1); 
  filter: invert(1);
}
&.page-0 {
  img{
    -webkit-filter: none; 
    filter: none;
  }
}
`;
const NavPrimary = styled.nav`
margin-left: 2vw;
 a {
  pointer-events: all;
  color: ${COLOR.black};
  border-bottom: 1px dotted transparent;
  font-family: ${FONT.sans};
  font-weight: 700;
  font-style: 'normal';
  text-transform: uppercase;
 }
 a:hover, a:active {
  color: ${COLOR.black};
  border-bottom: 1px dotted ${COLOR.black};
 }
 &.home-page-0, &.home-page-3, &.home-page-5,
 &.story-page-0, &.story-page-4 {
    a {
      color: ${COLOR.white};
    }
    a:hover, a:active {
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
&.story-page-0, &.story-page-4 {
  img{
    -webkit-filter: none; 
    filter: none;
  }
}
`;

const NavPanel = ({ className, currentPage }) => {

return(
  <NavContainer className={[className, `d-flex justify-content-between align-items-center` ]}>
      <NavPrimary className={`${currentPage}`}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <img src={cross_logo} className="cross-logo" alt="Glendalough cross logo" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/our-story" className="nav-link">
              Our story
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gin" className="nav-link">
              Gin
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/whiskey" className="nav-link">
              Whiskey
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cocktails" className="nav-link">
              Cocktails
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/features" className="nav-link">
              Features
            </Link>
          </li>
        </ul>
      </NavPrimary>
      <LogoContainer className={`${currentPage}`} hidden>
        <img src={logo} className="nav-logo" alt="Glendalough logo" />
      </LogoContainer>
      <ShopLogoContainer className={`d-flex align-items-center ${currentPage}`}>
        <img src={shop_logo} className="nav-logo-shop" alt="Glendalough shop logo" />
      </ShopLogoContainer>
    </NavContainer>
)};

NavPanel.propTypes = {
  className: PropTypes.string,
  currentPage: PropTypes.string,
};

export default NavPanel;
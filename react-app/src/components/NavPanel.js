import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR } from '../constants';
import logo from '../assets/ic_glendalough.svg';
import shop_logo from '../assets/ic_shop.svg';
import cross_logo from '../assets/ic_cross.svg';

const NavContainer = styled.div`
  position: fixed;
  top: 40vh;
  left: 2vw;
  right: 2vw;
  z-index 1001;
  pointer-events: none;
`;
const NavPrimary = styled.nav`
 a {
  pointer-events: all;
  color: ${COLOR.black};
  border-bottom: 1px dotted transparent;
 }
 a:hover, a:active {
  color: ${COLOR.black};
  border-bottom: 1px dotted ${COLOR.black};
 }
 &.page-0 {
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
const ShopLogoContainer = styled.div`
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

const NavPanel = ({ className, currentPage }) => (
  <NavContainer className={[className, `d-flex justify-content-around`]}>
      <NavPrimary className={`page-${currentPage}`}>
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
      <LogoContainer className={`page-${currentPage}`}>
        <img src={logo} className="nav-logo" alt="Glendalough logo" />
      </LogoContainer>
      <ShopLogoContainer className={[`page-${currentPage}`, `d-flex align-items-center`]}>
        <img src={shop_logo} className="nav-logo-shop" alt="Glendalough shop logo" />
      </ShopLogoContainer>
    </NavContainer>
);

NavPanel.propTypes = {
  currentPage: PropTypes.number,
};

export default NavPanel;
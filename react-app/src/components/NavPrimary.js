import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';
import { respondTo} from '../constants/styles';
import { nav_items } from '../constants/menu_items';
import shop_logo from '../assets/ic_shop.svg';
import cross_logo from '../assets/ic_cross.svg';

const FixedContainer =  styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1001;
  align-items: center;
  //justify-content: space-between;
  &.left {
    left: 0;
  }
  &.right {
    right: 0;
  }
  display: none;
  ${respondTo.md`
    display:flex;
  `}
`;

const Nav = styled.nav`
  padding-left: 2vw;
  ul {
    flex-direction: column;
  }
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
  &.invert {
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
  display: flex;
  align-items: center;
  margin-right: 2vw;
  img{
    -webkit-filter: none; 
    filter: none;
  }
  &.invert {
    img{
      -webkit-filter: invert(1); 
      filter: invert(1);
    }
  }
`;

const NavPrimary = ({ pathname, currentPage }) => {

  const navItems = nav_items.map((item, i) => (
    <li key={i} className="nav-item">
      <Link to={item.url} className="nav-link" onClick={ (e)=>{ if (item.url === pathname){ e.preventDefault()} } }>
        {item.title}
      </Link>
    </li>
  ));
 
  return (
    <>
    <FixedContainer className='left'>
      <Nav className={`${currentPage} invert`}>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <img src={cross_logo} className="cross-logo" alt="Glendalough cross logo" />
            </Link>
          </li>
          { navItems }
        </ul>
      </Nav>
    </FixedContainer>
    <FixedContainer className='right'>
      <ShopLogoContainer className={`${currentPage} invert`}>
        <img src={shop_logo} className="nav-logo-shop" alt="Glendalough shop logo" />
      </ShopLogoContainer>
    </FixedContainer>
    </>
  )
};

NavPrimary.propTypes = {
  currentPage: PropTypes.string,
};

export default NavPrimary;
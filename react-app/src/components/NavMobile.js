import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';
import { respondTo, sansNormal} from '../constants/styles';
import { nav_items } from '../constants/menu_items';
import header_glendalough from '../assets/header_glendalough.svg';
import shop_logo from '../assets/ic_shop.svg';
import cross_logo from '../assets/ic_cross.svg';
import SocialNav from './SocialNav';

const NavContainer = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index 10001;
  width: 100vw;
  max-width: 428px;
  background-color: ${COLOR.darkgreen};
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  display: flex;
  ${respondTo.sm`
    display:none;
  `}
`;

const NavHeader = styled.div`
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  ${sansNormal}
  img { 
    margin-top: 1rem;
    width: 55%;
  }
`;

const NavToggle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  ${sansNormal}
  font-size: 1.6rem;
  line-height: 1.9rem;
  cursor: pointer;
  color: ${COLOR.white};
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.6rem;
  height: 2.6rem;
  border 2px solid ${COLOR.white};
  text-align: center;
  border-radius: 1.3rem;
  padding: 0.3rem 0 0.3rem 0.65rem;
  > div {
    width: 1.5rem;
    height: 0.2rem;
    border-radius: 0.5rem;
    background-color: ${COLOR.white};
    transform-origin: -0.075rem;
    transition: all 0.3s linear;
    &:nth-of-type(1) {
      transform: rotate(45deg);
    }
    &:nth-of-type(2) {
      transform: translateX(100%);
      opacity: 0;
    }
    &:nth-of-type(3) {
      transform: rotate(-45deg);
    }
  }
  &.closed {
    left: 98vw;
    margin-left: 375px;
    padding: 0.3rem 0 0.3rem 0.45rem;
    > div {
      &:nth-of-type(1) {
        transform: rotate(0);
      }
      &:nth-of-type(2) {
        transform: translateX(0);
        opacity: 1;
      }
      &:nth-of-type(3) {
        transform: rotate(0);
      }

    }
  }
`;

const NavPrimary = styled.nav`
  padding-left: 2vw;
  a {
    pointer-events: all;
    color: ${COLOR.white};
    border-bottom: 1px dotted transparent;
    font-family: ${FONT.sans};
    font-weight: 500;
    font-style: 'normal';
    text-transform: uppercase;
    letter-spacing: 0.1rem; 
  }
  a:hover, a:focus, a:active, a.active {
    color: ${COLOR.white};
    border-bottom: 1px dotted ${COLOR.white};
  }
  .nav-link img {
    -webkit-filter: invert(1); 
    filter: invert(1);
  }
`;

const ShopLogoContainer = styled.div`
  cursor: pointer;
  margin-top: 1rem;
  img {
    margin-left: 1rem;
    width: 7rem;
  }
`;

const NavFooter = styled.div`
  margin-top: 1rem;
  width: 100%;
  ${sansNormal}
  p { 
    color: ${COLOR.white};
    text-align: center;
    margin-top: 1rem;
    font-size: 1rem;
  }
  ul {
    justify-content: center;
    align-items: center;
  }
`;

const NavPanel = ({ className='', currentPage }) => {
  
  const [menuActive, setMenuActive] = useState(false);

  const [springs, api] = useSpring(() => ({
    from: {
      x: '0px'
    },
    to: {
      x: '-428px'
    }
  }));

  const handleMenuToggle = () => {
    const to = menuActive ? '-428px' : '0px';
    const from = menuActive ? '0px' : '-428px';
    api.start({
      from: {
        x: from,
      },
      to: {
        x: to,
      },
    })
    setMenuActive(!menuActive);
  }

  const navItems = nav_items.map((item, i) => (
    <li key={i} className="nav-item">
      <Link to={item.url} className="nav-link">
        {item.title}
      </Link>
    </li>
  ));
 
  return (
      <NavContainer style={{...springs}} className={`${className} ${menuActive ? 'open':'closed'}`}>
        <NavToggle className={`${className} ${menuActive ? 'open':'closed'}`} onClick={handleMenuToggle}>
          <div />
          <div />
          <div />
        </NavToggle>
        <NavHeader>
          <img src={header_glendalough} className="cross-logo" alt="Glendalough header logo" />
        </NavHeader>
        <NavPrimary className={`${currentPage}`}>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <img src={cross_logo} className="cross-logo" alt="Glendalough cross logo" />
              </Link>
            </li>
            { navItems }
          </ul>
          <ShopLogoContainer className={`d-flex align-items-center ${currentPage}`}>
              <img src={shop_logo} className="nav-logo-shop" alt="Glendalough shop logo" />
          </ShopLogoContainer>
        </NavPrimary>

        <NavFooter>
          <SocialNav />
          <p>&copy; Glendalough Distillery 2023</p>
        </NavFooter>
      </NavContainer>
  )
};

NavPanel.propTypes = {
  className: PropTypes.string,
  currentPage: PropTypes.string,
};

export default NavPanel;
import React from 'react';
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
  max-width: 100%;
  background-color: ${COLOR.darkgreen};
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  display: flex;
  ${respondTo.md`
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
  z-index 99999999;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.6rem;
  height: 2.6rem;
  padding: 0.3rem 0 0.3rem 0.65rem;
  ${sansNormal}
  font-size: 1.6rem;
  line-height: 1.9rem;
  text-align: center;
  cursor: pointer;
  color: ${COLOR.white};
  border 2px solid ${COLOR.white};
  border-radius: 1.3rem;
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
    left: calc(200vw - 4rem);
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
  &.invert:not(.home-page-0) {
    color: ${COLOR.black};
    border-color: ${COLOR.black};
    > div {
      background-color: ${COLOR.black};
    }
  }
`;

const StyledNav = styled.nav`
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
    -webkit-filter: invert(1); 
    filter: invert(1);
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

const NavPrimary = ({currentPage, menuActive, toggleMenu }) => {
  
  //const [menuActive, setMenuActive] = useState(false);

  const [springs, api] = useSpring(() => ({
    from: {
      x: '0vw'
    },
    to: {
      x: '-101vw'
    }
  }));

  const handleMenuToggle = () => {
    const to = menuActive ? '-101vw' : '0vw';
    const from = menuActive ? '0vw' : '-101vw';
    api.start({
      from: {
        x: from,
      },
      to: {
        x: to,
      },
    })
    toggleMenu();
  }

  const navItems = nav_items.map((item, i) => (
    <li key={i} className="nav-item">
      <Link to={item.url} className="nav-link" onClick={handleMenuToggle}>
        {item.title}
      </Link>
    </li>
  ));
 
  return (
      <NavContainer style={{...springs}} className={`${menuActive ? 'open':'closed'}`}>
        <NavToggle className={`${currentPage} ${menuActive ? 'open':'closed'} ${menuActive ? '':'invert'}`} onClick={handleMenuToggle}>
          <div />
          <div />
          <div />
        </NavToggle>
        <NavHeader>
          <img src={header_glendalough} className="cross-logo" alt="Glendalough header logo" />
        </NavHeader>
        <StyledNav className={`${currentPage}`}>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleMenuToggle}>
                <img src={cross_logo} className="cross-logo" alt="Glendalough cross logo" />
              </Link>
            </li>
            { navItems }
          </ul>
          <ShopLogoContainer className={`d-flex align-items-center ${currentPage}`}>
              <img src={shop_logo} className="nav-logo-shop" alt="Glendalough shop logo" />
          </ShopLogoContainer>
        </StyledNav>

        <NavFooter>
          <SocialNav />
          <p>&copy; Glendalough Distillery 2023</p>
        </NavFooter>
      </NavContainer>
  )
};

NavPrimary.propTypes = {
  currentPage: PropTypes.string,
};

export default NavPrimary;
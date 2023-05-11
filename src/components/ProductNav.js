import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import placeholder from '../assets/placeholder.png';

const NavContainer = styled.div`
  display: flex;
`;
const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;
const NavItem = styled.li`
  display: flex;
  margin-right: 1em;
  a {
    text-decoration: none;
  }
  &.active {
    text-decoration: underline;
  }
`;

const ProductNav = ({className, items, activeUrl }) => (
  <NavContainer className={className}>
    <NavList>
      {items.map((item, i) => (
        <NavItem key={i} className={item.url === activeUrl ? 'active' : ''}>
          <Link to={item.url}>{item.title}</Link>
        </NavItem>
      ))}
    </NavList>
  </NavContainer>
);

ProductNav.propTypes = {
  items: PropTypes.array,
  activeUrl: PropTypes.string,
};

export default ProductNav;

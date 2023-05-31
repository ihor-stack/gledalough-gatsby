import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR } from '../constants';

const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 12.5vw;
`;
const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;
const NavItem = styled.li`
  display: flex;
  margin-right: 1rem;
  a {
    text-decoration: none;
  }
  &.active {
    text-decoration: underline;
  }
`;

const ProductNav = ({className, items, activeUrl, bgColor}) => (
  <PanelContainer className={className} style={{backgroundColor: `${COLOR[bgColor]}`}}>
    <div className="d-flex justify-content-center align-items-center">
    <NavList>
      {items.map((item, i) => (
        <NavItem key={i} className={item.url === activeUrl ? 'active' : ''}>
          <Link to={item.url}>{item.title}</Link>
        </NavItem>
      ))}
    </NavList>
    </div>
  </PanelContainer>
);

ProductNav.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  items: PropTypes.array,
  activeUrl: PropTypes.string,
};

export default ProductNav;

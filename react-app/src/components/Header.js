import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PanelContainer = styled.div`
  display: flex;
`;

const Header = ({ className }) => (
  <PanelContainer className={className}>
      <div className="text-center">
        <h1>Glendalough Distillery</h1>
      </div>
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
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
      </nav>
    </PanelContainer>
);

export default Header;
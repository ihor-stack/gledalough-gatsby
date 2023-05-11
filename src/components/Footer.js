import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PanelContainer = styled.div`
  display: flex;
`;

const Footer = ({ className }) => (
  <PanelContainer className={className}>
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/our-ethos" className="nav-link">
              Our ethos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-link">
              Contact us
            </Link>
          </li>
          <li>[image]</li>
          <li className="nav-item">
            <Link to="/tours" className="nav-link">
              Tours
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/privacy" className="nav-link">
              Privacy
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/terms-and-conditions" className="nav-link">
              T&amp;CS
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <div className="row align-items-start">
        <div className="col text-left">
          <p>&copy; Glendalough Distillery 2022</p>
        </div>
        <div className="col text-right">
          <ul className="d-flex justify-content-end list-unstyled">
            <li>[IG]</li>
            <li>[FB]</li>
            <li>[TW]</li>
          </ul>
        </div>
      </div>
    </PanelContainer>
);

export default Footer;

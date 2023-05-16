import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';
import footer_logo from '../assets/footer_logo.png';



const PanelContainer = styled.div`
  display: flex;
  background-color: ${COLOR.darkgreen};
  color: ${COLOR.white};
  padding: 0 10vw;
`;

const Col = styled.div`
  &.col-left {
    width: 45vw;
  }
  &.col-center {
    width: 15vw;
  }
  &.col-right {
    width: 15vw;
    padding-top: 15vw;
  }
`;

const FormMessage = styled.p`
  font-size: 1.6rem;
  font-family: ${FONT.sans};
  font-weight: 300;
  font-style: 'normal';
`;

const NewsContainer = styled.div`
  width: 100%;
` 

const Nav = styled.nav`
  width: 100%;
  &.nav-footer a{
    color: ${COLOR.white};
    font-family: ${FONT.sans};
    font-weight: 700;
    font-style: 'normal';
    text-transform: uppercase;
    &:first-of-type {
      padding-left:0;
    }
  }
`

const InputEmail = styled.input`
  width: 60%;
  background: none;
  border: 1px solid white;
  color: white;
  border-radius: 1rem 0 0 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
`
const Button = styled.button`
  background: none;
  border: 1px solid white;
  color: white;
  border-radius: 0 1rem 1rem 0;
  padding: 0.5rem;
`


const Footer = ({ className }) => (
  <PanelContainer className={className}>
    <Col className='col-left d-flex flex-column'>

        <NewsContainer className="text-left">
          <h2>Distillery News</h2>
          <InputEmail placeholder={`Email`}/><Button>Sign-up</Button>
          <FormMessage>Get the latest news and cocktails straight to your inbox</FormMessage>
        </NewsContainer>
        <Nav>
        <ul className="nav justify-content-start">
          <li>[IG]</li>
          <li>[FB]</li>
          <li>[TW]</li>
        </ul>
        </Nav>
        <Nav className='nav-footer'>
          <ul className="nav justify-content-start">
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
            <li className="nav-item">
              <Link to="/nutritional-info" className="nav-link">
                Nutritional Info
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/enjoy-responsibly" className="nav-link">
              Enjoy Responsibly
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
        </Nav>

    </Col>

    <Col className='col-center d-flex flex-column'>
      <img src={footer_logo} className="cross-logo img-fluid" alt="Glendalough cross logo" />
    </Col>

    <Col className='col-right d-flex flex-column align-items-end'>
      <div>
        <p>&copy; Glendalough Distillery 2023</p>
      </div>
    </Col>

  </PanelContainer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
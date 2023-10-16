import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SocialNav from './SocialNav'
import { COLOR } from '../constants'
import { footer_items } from '../constants/menu_items'
import {
  gutter,
  respondTo,
  titleMono,
  titleLargest,
  sansNormal,
} from '../constants/styles'
import footer_logo from '../assets/footer_logo.png'
import { LanguageSwitcher } from './LanguageSwitcher'

const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLOR.darkgreen};
  color: ${COLOR.white};
  ${gutter}
  padding-top: 4rem;
  ${respondTo.md`
    flex-direction: row;
  `}
`
const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  &.col-left {
    width: 100%;
  }
  &.col-center {
    display: none;
    width: 15vw;
  }
  &.col-right {
    display: flex;
    padding-top: 15vw;
    align-items: end;
    p {
      ${sansNormal}
      font-size: 1rem;
      line-height: 1rem;
      color: ${COLOR.white};
    }
  }
  ${respondTo.md`
      &.col-left {
        width: 45vw;
      }
      &.col-center, &.col-right {
        display:flex;
      }
  `}
`
const FooterTitle = styled.h2`
  ${titleLargest}
  margin-bottom: 3rem;
  color: ${COLOR.white};
`

const FormMessage = styled.p`
  ${sansNormal}
  color: ${COLOR.white};
  margin-top: 2rem;
`
const NewsContainer = styled.div`
  width: 100%;
  .cross-logo {
    display: flex;
    margin: 0 auto;
    margin-bottom: 3rem;
    max-width: 200px;
  }
  ${respondTo.md`
    .cross-logo{
      display: none;
    }
  `}
`
const Nav = styled.nav`
  width: 100%;
  margin-top: 2rem;
  &.nav-footer a {
    ${sansNormal}
    font-size: 1rem;
    line-height: 1rem;
    color: ${COLOR.white};
    text-transform: uppercase;
    &:first-of-type {
      padding-left: 0;
    }
  }
`
const InputEmail = styled.input`
  ${titleMono}
  font-size: 1rem;
  line-height: 1rem;
  width: 60%;
  background: none;
  border: 1px solid white;
  color: white;
  border-radius: 1.6rem 0 0 1.6rem;
  padding: 0.6rem 1rem;
  margin-bottom: 1rem;
`
const Button = styled.button`
  ${titleMono}
  font-size: 1rem;
  line-height: 1rem;
  background: none;
  border: 1px solid white;
  color: white;
  border-radius: 0 1.6rem 1.6rem 0;
  padding: 0.76rem 2rem 0.76rem 1rem;
`

const Footer = ({ className, activeDocMeta }) => {
  const footerItems = footer_items.map((item, i) => (
    <li key={i} className="nav-item">
      <Link to={item.url} className="nav-link">
        {item.title}
      </Link>
    </li>
  ))

  return (
    <PanelContainer className={className}>
      <Col className="col-left">
        <NewsContainer className="text-left">
          <img
            src={footer_logo}
            className="cross-logo img-fluid"
            alt="Glendalough cross logo"
          />
          <FooterTitle>Distillery News</FooterTitle>
          <InputEmail placeholder={`Email`} />
          <Button>Sign-up</Button>
          <FormMessage>
            Get the latest news and cocktails straight to your inbox
          </FormMessage>
        </NewsContainer>
        <Nav>
          <SocialNav className="nav justify-content-start" />
          <LanguageSwitcher activeDocMeta={activeDocMeta} />
        </Nav>
        <Nav className="nav-footer">
          <ul className="nav justify-content-start">{footerItems}</ul>
        </Nav>
      </Col>
      <Col className="col-center">
        <img
          src={footer_logo}
          className="cross-logo img-fluid"
          alt="Glendalough cross logo"
        />
      </Col>
      <Col className="col-right">
        <div>
          <p>&copy; Glendalough Distillery 2023</p>
        </div>
      </Col>
    </PanelContainer>
  )
}

export default Footer

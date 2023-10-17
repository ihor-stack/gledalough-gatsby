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
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { API_URL } from '../constants/baseUrl'

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
  .error {
    color: #fca5a5;
  }
  .success {
    color: #86efac;
  }
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
const InputEmail = styled(Field)`
  ${titleMono}
  font-size: 1rem;
  line-height: 1rem;
  width: 60%;
  background: none;
  border: 1px solid white;
  color: white;
  border-radius: 1.6rem 0 0 1.6rem;
  padding: 0.6rem 1rem;
  margin-bottom: 0.225rem;
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

const emailValidationSchema = Yup.object().shape({
  // email, required
  email: Yup.string().email('Please enter valid email.').required('Required'),
})
const Footer = ({ className, activeDocMeta }) => {
  const [success, setSuccess] = React.useState({
    show: false,
    message: '',
  })
  const [error, setError] = React.useState({
    show: false,
    message: '',
  })
  const footerItems = footer_items.map((item, i) => (
    <li key={i} className="nav-item">
      <Link to={item.url} className="nav-link">
        {item.title}
      </Link>
    </li>
  ))

  const handleSubmit = async (values) => {
    const data = {
      email: values.email,
    }
    const api = await axios
      .post(API_URL.LOCAL + '/contact', data)
      .then(({ data }) => {
        console.log(data)
        setSuccess({
          show: true,
          message: 'Thank you for signing up',
        })
      })
      .catch((err) => {
        console.log(err)
        setError({
          show: true,
          message: 'Something went wrong, please try again',
        })
      })
  }

  return (
    <PanelContainer className={className}>
      <Col className="col-left">
        <NewsContainer className="text-left">
          <Formik
            initialValues={{
              email: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={emailValidationSchema}
          >
            {({ values, errors, handleChange, setFieldValue }) => (
              <Form id="contact-form" autoComplete="off">
                <img
                  src={footer_logo}
                  className="cross-logo img-fluid"
                  alt="Glendalough cross logo"
                />
                <FooterTitle>Distillery News</FooterTitle>
                <div>
                  <div>
                    <InputEmail
                      type="email"
                      id="form-email"
                      name="email"
                      placeholder="Email *"
                      disabled={success.show}
                      required
                    />
                    <Button disabled={success.show}>Sign-up</Button>
                  </div>
                  {errors.email && <div className="error">{errors.email}</div>}
                  {error?.show && <div className="error">{error?.message}</div>}
                  {success?.show && (
                    <div className="success">{success?.message}</div>
                  )}
                </div>
                <FormMessage>
                  Get the latest news and cocktails straight to your inbox
                </FormMessage>
              </Form>
            )}
          </Formik>
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

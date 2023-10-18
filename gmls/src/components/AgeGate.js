import React, { useEffect, useState } from 'react'

// components
// import CountrySelector from './CountrySelector'
import ImgWithFallback from './ImgWithFallback'

// assets
import logo from '../assets/logo_white.png'
import styled from 'styled-components'
import { COLOR, FONT } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  background-color: ${COLOR.darkgreen};
  color: ${COLOR.white};
  text-align: center;
  max-width: 26rem;
  margin: 0 auto;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  padding: 2rem 2rem 3rem 2rem;
`

const Notice = styled.span`
  font-family: ${FONT.serif};
  letter-spacing: 0.05rem;
  font-size: 1.2rem;
  font-weight: 500;
`

const Input = styled.input`
  font-family: ${FONT.serif};
  border-radius: 3rem;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: white;
  width: 100%;
  text-align: center;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`

const Label = styled.label`
  font-family: ${FONT.sans};
  margin-bottom: 0.2rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  opacity: 80%;
`

const Button = styled.button`
  font-family: ${FONT.sans};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: rgba(255, 255, 255, 0.8);
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  padding: 0 1rem 0.25rem 0;
`

const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
`
const Error = styled.div`
  color: rgba(255, 255, 255, 0.5);
`
const AgeGate = ({ setAgeValid, activeDocMeta }) => {
  const { lang } = activeDocMeta ? activeDocMeta : { lang: 'en-us' }
  const [minorMsg, setMinorMsg] = useState(false)
  const ageGateContent = []
  const [error, setError] = useState({
    invalidDate: false,
  })

  const _t = {
    'en-us': {
      notice:
        'To enter our site you must be of the legal purchase age for alcohol in your country of access.',
      invalidDate: 'Please enter a valid date.',
      underAge: "Please come back and visit us when you're 21.",
    },
    'en-ca': {
      notice:
        'To enter our site you must be of the legal purchase age for alcohol in your country of access.',
      invalidDate: 'Please enter a valid date.',
      underAge: "Please come back and visit us when you're 21.",
    },
  }

  const submit = (evt) => {
    evt.preventDefault()
    const formData = new FormData(evt.target)
    const day = formData.get('day')
    const month = formData.get('month')
    const year = formData.get('year')
    // reset error
    setError({
      invalidDate: false,
    })
    // validate date
    if (day && month && year) {
      const date = new Date(`${year}-${month}-${day}`)
      const now = new Date()
      // if date is invalid
      if (date == 'Invalid Date') {
        setError({
          invalidDate: true,
        })
        return
      }
      if (date > now) {
        // invalid date
        setError({
          invalidDate: true,
        })
      } else {
        // valid date
        const age = now.getFullYear() - date.getFullYear()
        if (age < 21) {
          // minor
          setMinorMsg(true)
        } else {
          // adult
          setAgeValid()
        }
      }
    } else {
      // invalid date
      setError({
        invalidDate: true,
      })
    }
    console.log(day, month, year)
  }

  useEffect(() => {
    // clear error after 10sec
    const timer = setTimeout(() => {
      setError({})
    }, 10000)
    return () => clearTimeout(timer)
  }, [error])

  useEffect(() => {
    // disable scroll
    document.body.style.overflow = 'hidden'
    return () => {
      // enable scroll
      document.body.style.overflow = 'unset'
    }
  }, [])
  if (!minorMsg) {
    // age gate
    ageGateContent.push(
      <form key="1" onSubmit={submit} className="container-fluid px-0">
        <div className="row w-lg-80 mx-auto">
          <div className="col-12 px-3 px-lg-4 mb-3">
            <Notice>{_t[lang].notice}</Notice>
          </div>
        </div>
        <div className="d-flex align-items-center mx-lg-3">
          <div className="me-2">
            <Label htmlFor="day">Day</Label>
            <Input id="day" name="day" type="text" placeholder="DD" required />
          </div>
          <div className="me-2 flex-1">
            <Label htmlFor="month">Month</Label>
            <Input
              id="month"
              name="month"
              type="text"
              placeholder="MM"
              required
            />
          </div>
          <div>
            <Label htmlFor="year">Year</Label>
            <Input
              id="year"
              name="year"
              type="text"
              placeholder="YYYY"
              required
            />
          </div>
        </div>
        {error.invalidDate && (
          <Error className="d-flex align-items-center justify-content-center mt-1">
            {_t[lang].invalidDate}
          </Error>
        )}
        <div className="d-flex align-items-center justify-content-center mt-4">
          <Button className="me-2">Submit</Button>
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{
              fontSize: '0.8rem',
              opacity: '80%',
            }}
          />
        </div>
      </form>,
    )
  } else {
    // minor entered
    ageGateContent.push(
      <div key="2" className="container-fluid px-0">
        <div className="row w-lg-80 mx-auto">
          <div className="col-12 py-3 px-3 py-lg-4 px-lg-4">
            <h2 className="my-2 age-limit">{_t[lang].underAge}</h2>
          </div>
        </div>
      </div>,
    )
  }
  return (
    <Modal className="modal modal-age-gate d-block">
      <div className="d-flex flex-wrap align-items-center h-100">
        <Container>
          <div className="age-gate d-flex flex-wrap justify-content-center align-items-center">
            <div className="row position-relative justify-content-center w-100">
              <div>
                <ImgWithFallback
                  classNamePicture={
                    'align-self-center mx-auto d-block img-fluid my-3 my-lg-4'
                  }
                  style={{
                    objectFit: 'contain',
                  }}
                  classNameImg="age-gate-logo"
                  src={logo}
                  fallbackSrc={logo}
                  alt="White Claw Logo"
                  width="175"
                  height={175}
                />
              </div>
            </div>

            {/* AGE GATE DYNAMIC CONTENT */}
            {ageGateContent}
          </div>
        </Container>
      </div>
    </Modal>
  )
}

export default AgeGate

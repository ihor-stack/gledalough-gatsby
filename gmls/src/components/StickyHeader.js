import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../constants/'
import { sansNormal } from '../constants/styles'
import header_glendalough from '../assets/header_glendalough.svg'
import usePageScroll from '../hooks/usePageScroll'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${COLOR.white};
  z-index: 10001;
  &.hidden {
    display: none;
  }
`

const Header = styled.div`
  width: 100%;
  text-align: center;
  height: 5rem;
  ${sansNormal}
  img {
    margin-top: 1rem;
    width: 55%;
    max-height: 3rem;
    -webkit-filter: invert(1);
    filter: invert(1);
  }
`

const StickyHeader = ({ currentPage }) => {
  const pageScroll = usePageScroll()
  return (
    <Container className={pageScroll < 250 ? 'hidden' : ''}>
      <Header>
        <img
          src={header_glendalough}
          className="cross-logo"
          alt="Glendalough header logo"
        />
      </Header>
    </Container>
  )
}

export default StickyHeader

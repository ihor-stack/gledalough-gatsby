import React from 'react'
import styled from 'styled-components'
import { buttonBlank } from '../constants/styles'
import { Link } from 'gatsby'

const Container = styled.div`
  position: absolute;
  top: 6rem;
  right: 10vw;
`
const Button = styled(Link)`
  ${buttonBlank}
  font-size: 0.8rem;
  margin: 0 1rem 0.5rem 1rem;
  padding: 0;
  letter-spacing: 2px;
  border-bottom: 1px solid black;
  color: black;
  text-decoration: none;
  display: inline-block;

  &.prev {
    &::before {
      content: '<';
      position: absolute;
      left: -0.25rem;
      font-size: 1.2rem;
      font-weight: 300;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &.next {
    &::after {
      content: '>';
      position: absolute;
      right: -0.25rem;
      font-size: 1.2rem;
      font-weight: 300;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`

const ContentNavigation = ({ previous, next, parent_document_link }) => {
  return (
    <Container>
      {previous?.uid && (
        <Button className="prev" to={previous?.url}>
          PREVIOUS
        </Button>
      )}
      {parent_document_link?.uid && (
        <Button to={parent_document_link?.url}>ALL</Button>
      )}
      {next?.uid && (
        <Button className="next" to={next?.url}>
          NEXT
        </Button>
      )}
    </Container>
  )
}

export default ContentNavigation

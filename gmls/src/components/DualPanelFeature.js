import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLOR } from '../constants'
import { buttonBlank, sansNormal, titleLarge } from '../constants/styles'
import { PrismicRichText } from '@prismicio/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'

const PanelContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: stretch;
  min-height: 30rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1024;
`

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  &.photo {
    background-size: cover;
    background-repeat: no-repeat;
  }
  &.text {
    background-size: cover;
    background-repeat: no-repeat;
  }
`

const Title = styled.h3`
  ${titleLarge}
  width: 100%;
  padding: 1rem 3rem 0 3rem;
  text-align: left;
`

const Paragraph = styled.span`
  ${sansNormal}
  margin: 1rem 3rem 0 3rem;
  max-height: 80vh;
  overflow-y: auto;
`

const CloseButton = styled.button`
  ${buttonBlank}
  color: ${COLOR.white};
  position: absolute;
  top: 3rem;
  right: 1rem;
`

const DualPanelFeature = ({
  className,
  bgColor,
  image,
  content,
  title,
  close,
}) => {
  React.useEffect(() => {
    // disable scrolling
    document.body.style.overflow = 'hidden'
    return () => {
      // enable scrolling
      document.body.style.overflow = 'unset'
    }
  }, [])
  return (
    <PanelContainer
      className={className}
      style={{ backgroundColor: `${bgColor || COLOR.beige}` }}
    >
      <Panel className="text">
        <Title>{title}</Title>
        <Paragraph>
          <PrismicRichText field={content} />
        </Paragraph>
      </Panel>
      <Panel className="photo" style={{ backgroundImage: `url(${image})` }}>
        <CloseButton onClick={() => close(null)}>
          <FontAwesomeIcon icon={faXmarkCircle} size="3x" />
        </CloseButton>
      </Panel>
    </PanelContainer>
  )
}

DualPanelFeature.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  content: PropTypes.array,
  image: PropTypes.string,
  title: PropTypes.string,
}

export default DualPanelFeature

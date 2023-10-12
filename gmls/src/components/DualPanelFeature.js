import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLOR } from '../constants'
import { sansNormal, titleLarge } from '../constants/styles'
import { PrismicRichText } from '@prismicio/react'

const PanelContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 50vh;
`

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  &.photo {
    cursor: pointer;
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

const Paragraph = styled.p`
  ${sansNormal}
  margin: 1rem 3rem 0 3rem;
`

const DualPanelFeature = ({
  className,
  bgColor,
  image,
  content,
  title,
  close,
}) => (
  <PanelContainer
    className={className}
    style={{ backgroundColor: `${bgColor || COLOR.beige}` }}
  >
    <Panel
      className="photo"
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => close(null)}
    />
    <Panel className="text">
      <Title>{title}</Title>
      <Paragraph>
        <PrismicRichText field={content} />
      </Paragraph>
    </Panel>
  </PanelContainer>
)

DualPanelFeature.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  content: PropTypes.array,
  image: PropTypes.string,
  title: PropTypes.string,
}

export default DualPanelFeature

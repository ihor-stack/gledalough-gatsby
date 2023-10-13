import * as React from 'react'
import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews'
import { Layout } from '../components/Layout'
import { COLOR } from '../constants'
import { respondTo, headingLarge, titleLargest } from '../constants/styles'
import styled from 'styled-components'
import img from '../assets/bg_hero_stories.jpg'
import { useLocation } from '@reach/router'

const PanelContainer = styled.div`
  display: flex;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  img {
    margin-top: -4rem;
    max-width: 300px;
    ${respondTo.xs`
      max-width: 400px;
    `}
    ${respondTo.sm`
      max-width: 480px; 
    `}
    ${respondTo.md`
      max-width: none; 
    `}
  }
`

const Heading = styled.h1`
  ${headingLarge}
  text-align:center;
  color: ${COLOR.white};
  font-weight: 500;
`
const Title = styled.h2`
  ${titleLargest}
  color: ${COLOR.white};
`

const NotFoundPage = () => {
  const { pathname } = useLocation()

  return (
    <Layout hideFooter>
      <PanelContainer
        className="page"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div>
          <Heading>{pathname} = 404</Heading>
          <Title>Not Found</Title>
        </div>
      </PanelContainer>
    </Layout>
  )
}

export default withPrismicUnpublishedPreview(NotFoundPage)

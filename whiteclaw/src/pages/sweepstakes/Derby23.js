// core
import React, {useEffect}from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"

// components
import LayoutEmbeddedPage from '../../components/LayoutEmbeddedPage'
import { Seo } from '../../components/Seo'
import WishpondPage from "../../components/WishpondPage";

//didn't move to the template because we need the URL in uppercase
const Derby23 = ({data}) => {

  const pageData = data.prismicFullscreenEmbeddedPage.data
  // console.log(pageData)

  useEffect(() => {

    //append segment analytics script
    const instagramScript = document.createElement("script")
    instagramScript.src = 'https://apps.elfsight.com/p/platform.js'
    instagramScript.defer = true
    instagramScript.async = true
    document.body.appendChild(instagramScript)

  },[])

  return (
      <LayoutEmbeddedPage>
        <Seo
            title={pageData.meta_title?.text}
            description={pageData.meta_description?.text}
            social_card={pageData.social_card?.url}
        />
        <WishpondPage id="2736948" type='form'/>
        <section className='instagram-section'>
          <div className="elfsight-app-ee4484ec-e020-426a-b0d3-32b5fae6c664"></div>
        </section>
        <section  className='pt-5 pb-1' style={{backgroundColor: "black"}}>
          <p className="text-center w-75 mx-auto" style={{color: 'white', fontSize: '18px'}}>Please Drink Responsibly. All Registered Trademarks, used under license by White Claw Seltzer Works, Chicago, IL<br/> Churchill Downs, Kentucky Oaks, Kentucky Derby and the Twin Spires design are registered trademarks of Churchill Downs Incorporated</p>
        </section>
      </LayoutEmbeddedPage>
  )
}


export const query = graphql`
  query Derby23Query {
    prismicFullscreenEmbeddedPage (uid: {eq: "derby23"}) {
       _previewable
       data {
        meta_title {
            text
        }
        social_card{
          url
        }
        meta_description {
          text
        }
      }
    }
  }
 `

export default withPrismicPreview(Derby23)

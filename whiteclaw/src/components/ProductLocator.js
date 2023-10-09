// core
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { SliceZone } from '@prismicio/react'

// preview
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'

// components
import { components } from '../slices/product-locator'

const loadScript = (url) => {
  return new Promise(function (resolve, reject) {
    let script = document.createElement('script')
    script.src = url
    script.async = false
    script.onload = function () {
      resolve(url)
    }
    script.onerror = function () {
      reject(url)
    }
    document.body.appendChild(script)
  })
}

let scripts = [
  'https://maps.googleapis.com/maps/api/js?key=AIzaSyBdKe9lOFpOiN8Wu51RzCnIXpiV3bf61J8&libraries=places'
]

// save all Promises as array
let promises = []

scripts.forEach(function (url) {
  promises.push(loadScript(url))
})

Promise.all(promises).then(function () {
  // console.log('all scripts loaded')
}).catch(function (script) {
  console.log(script + ' failed to load')
})

const ProductLocator = ({ activeDocMeta }) => {
  const { lang } = activeDocMeta
  // Can't use string interpolation for a loop
  const queryData = useStaticQuery(graphql`
    {
      EN: prismicProductLocator(lang: { eq: "en-us" }) {
        data {
          body {
            ... on PrismicProductLocatorDataBodyProductLocatorModule {
              id
              slice_label
              slice_type
              primary {
                locator_title {
                  html
                  text
                }
                locator_field_placeholder
                locator_button_text
                locator_description {
                  html
                  text
                }
              }
              items {
                locator_type_icon {
                  url
                  alt
                }
                locator_type_text
              }
            }
          }
        }
      }
      ES: prismicProductLocator(lang: { eq: "es-mx" }) {
        data {
          body {
            ... on PrismicProductLocatorDataBodyProductLocatorModule {
              id
              slice_label
              slice_type
              primary {
                locator_title {
                  html
                  text
                }
                locator_field_placeholder
                locator_button_text
                locator_description {
                  html
                  text
                }
              }
              items {
                locator_type_icon {
                  url
                  alt
                }
                locator_type_text
              }
            }
          }
        }
      }
    }
  `);
  const { data } = useMergePrismicPreviewData(queryData)
  const pageData = lang === 'en-us' ?  data.EN.data :  data.ES.data
  const sliceData = pageData.body

    return (
      <>
      <div className='row mx-0'>
        <div className='col-12'>
          <SliceZone slices={sliceData} components={components} />
        </div>
      </div>
      </>
    );
}

export default ProductLocator
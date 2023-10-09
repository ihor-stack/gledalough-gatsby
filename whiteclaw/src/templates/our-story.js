// core
import React from 'react'
import { graphql, Link } from 'gatsby'
import { withPrismicPreview } from "gatsby-plugin-prismic-previews"
import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import parse from 'html-react-parser'

// components
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'

// slice
import { PromoModule } from "../slices/new-products/PromoModule"
import NewsLetterSignUp from "../components/NewsLetterSignUp";
import { SUBSCRIPTION_FORM } from "../constants/subscriptionFormLocation";

const OurStory = ({data}) => {
  const pageContent = data.prismicAboutUsPage
  const pageData = data.prismicAboutUsPage.data
  const sliceData = pageData.body[0]
  // console.log('pageContent ' , pageContent)
  const subscriptionFormTitle = "Join the wave"
  const allCans = []

  const { lang, type, url } = pageContent
  const alternateLanguages = pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  const shuffleArray = (arr) => {
    let currIdx = arr.length,  randIdx;
    while (currIdx !== 0) {
      randIdx = Math.floor(Math.random() * currIdx);
      currIdx--;
      [arr[currIdx], arr[randIdx]] = [
        arr[randIdx], arr[currIdx]];
    }
    return arr;
  }

  const populateCans = () => {
    let i = 0
    pageData.many_product_bg_content.document.data.section_categories.map((sectionCategories) => {
      return sectionCategories.product_category.document.data.category_item.forEach((categoryItem) => {
        const productType = categoryItem.category_item_link.document.data.product_type
        const productURL = categoryItem.category_item_link.document.data.product_image_png.url
        if(productType === 'Can' && i < 24) {
          allCans.push(productURL)
          i++
        }
      });
    })
  }

  populateCans()

  const shuffledCans = shuffleArray(allCans)
  const shuffledCansMob = shuffleArray(Array.from(shuffledCans))

  const randNumBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const shuffledCansRandomNumbers = []
  shuffledCans.forEach(() => shuffledCansRandomNumbers.push(randNumBetween(500, 1500)))

  const shuffledCansMobRandomNumbers = []
  shuffledCansMob.forEach(() => shuffledCansMobRandomNumbers.push(randNumBetween(500, 1500)))

  return (
      <Layout currentPage="about-us" activeDocMeta={activeDoc}>
        <Seo title={pageData.meta_title?.text} description={pageData.meta_description?.text} image={pageData.social_card?.url} />
        <section id="about-us" className="inside-content about-us">
          <div className="about-us__hero">
            <h1 className="about-us__hero-text">
              <Parallax speed={-15}>{parse(pageData.hero_text.text)}</Parallax>
            </h1>
            <div className="about-us__hero-video">
              <video className="about-us__hero-video-el" src={pageData.hero_video.url} width="100%" height="100%" autoPlay loop muted playsInline />
            </div>
            <div className="about-us__hero-image">
              <img className="about-us__hero-image-el d-md-none" src={pageData.hero_image_mob.url} alt={pageData.hero_image.alt} />
              <img className="about-us__hero-image-el d-none d-md-block" src={pageData.hero_image.url} alt={pageData.hero_image.alt} />
            </div>
          </div>
          <div className="about-us__video">
            <div className="about-us__text-small"><Fade duration={2500} delay={500}>{pageData.video_text}</Fade></div>
            <video className="about-us__video-el" src={pageData.hero_video.url} width="100%" height="100%" autoPlay loop muted playsInline />
          </div>
          <div className="about-us__logo">
            <div className="about-us__logo-img">
              <img className="about-us__logo-img-el" src={pageData.logo.url} alt={pageData.logo.alt} />
            </div>
            <div className="about-us__text-small about-us__logo-text">{pageData.logo_text}</div>
          </div>
          <div className="about-us__featured">
            <div className="about-us__featured-bg-top">
              <img className="about-us__featured-bg-top-el" src={pageData.featured_bg_img_top.url} alt={pageData.featured_bg_img_top.alt} />
            </div>
            <div className="about-us__featured-text">{pageData.featured_text}</div>
            <div className="about-us__featured-product">
              <Parallax speed={10}>
                <img
                  className="about-us__featured-product-el"
                  src={pageData.featured_product.document.data.product_image_png.url}
                  alt={pageData.featured_product.document.data.product_image_png.alt}
                />
              </Parallax>
            </div>
            <div className="about-us__featured-bg-bottom">
              <img className="about-us__featured-bg-bottom-el" src={pageData.featured_bg_img_bottom.url} alt={pageData.featured_bg_img_bottom.alt} />
            </div>
          </div>
          <Link to={pageData.many_products_section_link.url || ''} className="about-us__many-product d-md-none">
            <div className="about-us__many-product-bg about-us__many-product-bg--two-rows">
              {shuffledCansMob.map((element, index) => {
                return ( index < 12 &&
                    <div className="about-us__many-product-img" key={index}>
                      <Fade duration={shuffledCansMobRandomNumbers[index + 1]} delay={shuffledCansMobRandomNumbers[index - 1]}>
                        <img className="about-us__many-product-img-el" src={element} alt="" /></Fade>
                    </div>
                  )
              })}
            </div>
            <div className="about-us__many-product-text about-us__many-product-text--first about-us__text-medium">{pageData.many_product_text_1}</div>
            <div className="about-us__many-product-bg">
              {shuffledCans.map((element, index) => {
                return (
                  <div className="about-us__many-product-img" key={index}>
                    <Fade duration={shuffledCansRandomNumbers[index + 1]} delay={shuffledCansRandomNumbers[index - 1]}><img className="about-us__many-product-img-el" src={element} alt="" /></Fade>
                  </div>
                );
              })}
            </div>
            <div className="about-us__many-product-text about-us__many-product-text--second about-us__text-medium">{pageData.many_product_text_2}</div>
            <div className="about-us__many-product-bg about-us__many-product-bg--two-rows">
              {shuffledCansMob.map((element, index) => {
                return (index >= 12 &&
                    <div className="about-us__many-product-img" key={index}>
                      <Fade duration={shuffledCansMobRandomNumbers[index + 1]} delay={shuffledCansMobRandomNumbers[index - 1]}>
                        <img className="about-us__many-product-img-el" src={element} alt="" />
                      </Fade>
                    </div>)
              })}
            </div>
          </Link>
          <Link to={pageData.many_products_section_link.url || ''} className="about-us__many-product d-none d-md-flex">
            <div className="about-us__many-product-bg">
              {shuffledCans.map((element, index) => {
                return (
                  <div className="about-us__many-product-img" key={index}>
                    <Fade duration={shuffledCansRandomNumbers[index + 1]} delay={shuffledCansRandomNumbers[index - 1]}><img className="about-us__many-product-img-el" src={element} alt="" /></Fade>
                  </div>
                );
              })}
            </div>
            <div className="about-us__many-product-text about-us__many-product-text--first about-us__text-medium">{pageData.many_product_text_1}</div>
            <Fade effect="manyProductFirstTextFade" duration={1500} delay={2000}>
              <div className='about-us__many-product-spacer'></div>
            </Fade>
            <Fade duration={1500} delay={3500}>
              <div className="about-us__many-product-text about-us__many-product-text--second about-us__text-medium">{pageData.many_product_text_2}</div>
            </Fade>
          </Link>
          <Link to={pageData.spirit_section_link.url || ''} className="about-us__spirit d-md-none">
            <div className="about-us__spirit-text">
              <div className="about-us__spirit-teaser about-us__text-teaser">{pageData.spirit_teaser}</div>
              <div className="about-us__spirit-title about-us__text-large">{pageData.spirit_title}</div>
              <div className="about-us__spirit-img">
                <img className="about-us__spirit-img-el about-us__spirit-img-el--bottle" src={pageData.spirit_product_1.document.data.product_image_png.url} alt={pageData.spirit_product_1.document.data.product_image_png.alt} />
                <img className="about-us__spirit-img-el about-us__spirit-img-el--can" src={pageData.spirit_product_2.document.data.product_image_png.url} alt={pageData.spirit_product_2.document.data.product_image_png.alt} />
              </div>
              <div className="about-us__spirit-body about-us__text-medium">{pageData.spirit_body_1}</div>
              <div className="about-us__spirit-body about-us__text-medium">{pageData.spirit_body_2}</div>
            </div>
          </Link>
          <Link to={pageData.spirit_section_link.url || ''} className="about-us__spirit d-none d-md-flex">
            <div className="about-us__spirit-text">
              <div className="about-us__spirit-teaser about-us__text-teaser">{pageData.spirit_teaser}</div>
              <div className="about-us__spirit-title about-us__text-large">{pageData.spirit_title}</div>
              <div className="about-us__spirit-body about-us__text-medium">{pageData.spirit_body_1}</div>
              <div className="about-us__spirit-body about-us__text-medium">{pageData.spirit_body_2}</div>
            </div>
              <Parallax translateY={[40, -30]}>
                <div className="about-us__spirit-img">
                    <img className="about-us__spirit-img-el about-us__spirit-img-el--bottle" src={pageData.spirit_product_1.document.data.product_image_png.url} alt={pageData.spirit_product_1.document.data.product_image_png.alt} />
                    <img className="about-us__spirit-img-el about-us__spirit-img-el--can" src={pageData.spirit_product_2.document.data.product_image_png.url} alt={pageData.spirit_product_2.document.data.product_image_png.alt} />
                </div>
              </Parallax>
          </Link>
          <div className="about-us__wave">
            <div className="about-us__wave-title about-us__text-large"><Fade duration={1500} delay={200}>{pageData.wave_title}</Fade></div>
            <div className='about-us__wave-body'>
              <div className="about-us__wave-text">
                <div className="about-us__wave-teaser about-us__text-teaser">{pageData.wave_teaser}</div>
                <div className="about-us__wave-body about-us__text-large">{pageData.wave_body}</div>
              </div>
                <div className="about-us__wave-image">
                  <Parallax speed={30}>
                    <img className="about-us__wave-image-el" src={pageData.wave_image.url} alt={pageData.wave_image.alt} />
                  </Parallax>
                </div>
            </div>
          </div>
          <div className="about-us__beach">
            <div className="about-us__beach-title about-us__text-large"><Fade duration={1500} delay={200}>{pageData.beach_title}</Fade></div>
            <div className="about-us__beach-image-bg">
              <img className="about-us__beach-image-bg-el" src={pageData.beach_bg_img.url} alt={pageData.beach_bg_img.alt} />
            </div>
            <div className='about-us__beach-footer'>
              <div className="about-us__beach-footer-teaser about-us__text-teaser">{pageData.beach_footer_teaser}</div>
              <div className="about-us__beach-footer-title about-us__text-large">{pageData.beach_footer_title}</div>
              <Slide bottom duration={1000}>
                <div className="about-us__beach-footer-product">
                  <img className="about-us__beach-footer-product-el" src={pageData.beach_footer_product_img.document.data.product_image_png.url} alt={pageData.beach_footer_product_img.document.data.product_image_png.alt} />
                </div>
              </Slide>
            </div>
          </div>
          <div className='about-us__newsletters pt-5 pb-5'>
            <div className="container-fluid">
              <NewsLetterSignUp
                  subscriptionFormTitle={ subscriptionFormTitle }
                  subscriptionFormName = { SUBSCRIPTION_FORM.OUR_STORY }
              />
            </div>
          </div>
          <div className="about-us__surf">
            <Fade duration={2500} delay={500}>
              <div className="about-us__surf-title about-us__text-large">{pageData.surf_title}</div>
            </Fade>
            <div className="about-us__surf-header-bg d-md-none">
              <img className="about-us__surf-header-bg-el" src={pageData.surf_bg_img_mob.url} alt={pageData.surf_bg_img_mob.alt} />
            </div>
            <div className="about-us__surf-header-bg d-none d-md-block">
              <img className="about-us__surf-header-bg-el" src={pageData.surf_bg_img.url} alt={pageData.surf_bg_img.alt} />
            </div>
            <div className='about-us__surf-body'>
              <div className="about-us__surf-body-text about-us__text-medium">{pageData.surf_footer_text_1}</div>
              <div className="about-us__surf-body-text about-us__text-medium">{pageData.surf_footer_text_2}</div>
            </div>
            <div className="about-us__surf-footer-bg">
              <img className="about-us__surf-footer-bg-el" src={pageData.cheers_img.url} alt={pageData.cheers_img.alt} />
            </div>
            <div className="about-us__surf-footer-title about-us__text-large">{pageData.cheers_title}</div>
          </div>
        </section>
        {/* Slice */}
        <PromoModule slice={sliceData} />
      </Layout>
  );
}

export const query = graphql`
query AboutUsPageQuery($uid: String, $id: String, $lang: String){
  prismicAboutUsPage(uid: { eq: $uid }, id: { eq: $id }, lang: { eq: $lang }) {
    _previewable
    url
    uid
    type
    id
    lang
    alternate_languages {
      id
      type
      lang
      uid
    }
    data {
      body {
        ... on PrismicAboutUsPageDataBodyPromoModule {
          id
          slice_type
          slice_label
          items {
            image {
              url
              alt
            }
            button_link {
              url
              link_type
            }
            button_text {
              text
            }
            subtitle {
              text
            }
          }
          primary {
            title {
              text
            }
          }
        }
      }
      social_card {
          url
      }
      meta_description {
          text
      }
      meta_title {
          text
      }
      hero_text {
        html
        text
      }
      hero_video {
        url
        type
      }
      hero_image {
        url
        alt
      }
      hero_image_mob {
        url
        alt
      }
      video_text
      logo {
        url
        alt
      }
      logo_text
      featured_bg_img_top {
        url
        alt
      }
      featured_text
      featured_product {
        document {
          ... on PrismicProductDetailsPage {
            id
            url
            data {
              product_image_png {
                url
                alt
              }
            }
          }
        }
      }
      featured_bg_img_bottom {
        url
        alt
      }
      many_product_bg_content {
        document {
          ... on PrismicProductSection {
            id
            data {
              section_categories {
                product_category {
                  document {
                    ... on PrismicProductCategory {
                      id
                      data {
                        category_item {
                          category_item_link {
                            document {
                              ... on PrismicProductDetailsPage {
                                id
                                data {
                                  product_type
                                  product_image_png {
                                    url
                                    alt
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      many_product_text_1
      many_product_text_2
      many_products_section_link {
        url
      }
      spirit_teaser
      spirit_title
      spirit_body_1
      spirit_body_2
      spirit_product_1 {
        document {
          ... on PrismicProductDetailsPage {
            id
            data {
              product_image_png {
                url
                alt
              }
            }
          }
        }
      }
      spirit_product_2 {
        document {
          ... on PrismicProductDetailsPage {
            id
            data {
              product_image_png {
                url
                alt
              }
            }
          }
        }
      }
      spirit_section_link {
        url
      }
      wave_title
      wave_teaser
      wave_body
      wave_image {
        url
        alt
      }
      beach_title
      beach_bg_img {
        url
        alt
      }
      beach_footer_teaser
      beach_footer_title
      beach_footer_product_img {
        document {
          ... on PrismicProductDetailsPage {
            id
            url
            data {
              product_image_png {
                url
                alt
              }
            }
          }
        }
      }
      surf_title
      surf_bg_img {
        url
        alt
      }
      surf_bg_img_mob {
        url
        alt
      }
      surf_footer_text_1
      surf_footer_text_2
      cheers_img {
        url
        alt
      }
      cheers_title
    }
  }
}
`
export default withPrismicPreview(OurStory)
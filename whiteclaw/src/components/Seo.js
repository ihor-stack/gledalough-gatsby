import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import { useLocation } from '@reach/router';

export const Seo = ({ description, title, image, children  }) => {
  const location = useLocation();

  const  { site , featuredImage } = useSiteMetadata()

  const ogImage = featuredImage && featuredImage?.childImageSharp?.gatsbyImageData

  const seo = {
    siteUrl: site.siteMetadata.siteUrl,
    title: title || site.siteMetadata.title,
    description: description || site.siteMetadata.description,
    ogTitle: title || site.siteMetadata.title,
    ogDescription: description || site.siteMetadata.description,
    ogImage: image || `${site.siteMetadata.siteUrl}${ogImage?.images.fallback.src}`,
    ogUrl: site.siteMetadata.siteUrl,
    ogImageSecureUrl: image || `${site.siteMetadata.siteUrl}${ogImage?.images.fallback.src}`,
    twitterCard: site.twitterCard,
    twitterSite :site.twitterSite,
    twitterTitle: title || site.siteMetadata.title,
    twitterImage: image || `${site.siteMetadata.siteUrl}${ogImage?.images.fallback.src}`,
    twitterDescription: description || site.siteMetadata.description,
    pinterestDomainVerify: site.siteMetadata.pinterestDomainVerify,
    googleSearchConsole: site.siteMetadata.googleSearchConsole,
    bingWebMaster: site.siteMetadata.bingWebMaster
  }

  // console.log(seo.ogImage)

  return (
    <Helmet>
      <title>{ seo.title }</title>
      <meta name="description" content={seo.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      { /*Open Graph*/ }
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${seo.siteUrl}${location.pathname}`} />

      {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}
      {seo.ogImage && <meta property="og:image:secure_url" content={seo.ogImage} />}
      {seo.ogImage && <meta property="og:image:width" content={image  ? "1200" : seo.ogImage.width} />}
      {seo.ogImage && <meta property="og:image:height" content={image  ? "630" : seo.ogImage.height} />}


      { /*Twitter */ }
      <meta name="twitter:card" content={seo.twitterCard} />
      <meta name="twitter:site" content={seo.twitterSite} />
      <meta name="twitter:title" content={seo.twitterTitle} />
      <meta name="twitter:description" content={seo.twitterDescription} />
      <meta name="twitter:image" content={seo.twitterImage} />

      { /*Pinterest*/ }
      <meta name="p:domain_verify" content={seo.pinterestDomainVerify} />

      { /*Google Search Console */ }
      <meta name="google-site-verification" content={seo.googleSearchConsole} />

      { /*Bing WebMaster */ }
      <meta name="msvalidate.01" content={seo.bingWebMaster} />

      { children }
    </Helmet>
  )
}



/**
 * This file contains configuration for `gatsby-plugin-prismic-previews` to
 * support preview sessions from Prismic with drafts and unpublished documents.
 *
 * @see https://prismic.io/docs/technologies/previews-gatsby
 */

import { componentResolverFromMap } from 'gatsby-plugin-prismic-previews'

import { linkResolver } from './linkResolver'

import Homepage from '../templates/index'
import CocktailPage from '../templates/cocktail'
import CocktailsHomePage from '../templates/cocktails'
import ContactPage from '../templates/contact-us'
import FeaturePage from '../templates/feature'
import FeaturesHomePage from '../templates/features'
import GinPage from '../templates/gin'
import GinsHomePage from '../templates/gins'
import OurStoryPage from '../templates/our-story'
import PrivacyPage from '../templates/privacy'
import TermsPage from '../templates/terms'
import WhiskeyPage from '../templates/whiskey'
import WhiskeysHomePage from '../templates/whiskeys'

/**
 * Prismic preview configuration for each repository in your app. This set of
 * configuration objects will be used with the `PrismicPreviewProvider`
 * higher order component.
 *
 * If your app needs to support multiple Prismic repositories, add each of
 * their own configuration objects here as additional elements.
 *
 */
export const repositoryConfigs = [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
    linkResolver,
    componentResolver: componentResolverFromMap({
      homepage: Homepage,
      cocktail: CocktailPage,
      cocktails: CocktailsHomePage,
      contact: ContactPage,
      feature: FeaturePage,
      features: FeaturesHomePage,
      gin: GinPage,
      gins: GinsHomePage,
      ourstory: OurStoryPage,
      privacy: PrivacyPage,
      terms: TermsPage,
      whiskey: WhiskeyPage,
      whiskeys: WhiskeysHomePage,
    }),
  },
]

/**
 * This file contains configuration for `gatsby-plugin-prismic-previews` to
 * support preview sessions from Prismic with unpublished documents.
 *
 * @see https://github.com/angeloashmore/gatsby-source-prismic/tree/alpha/packages/gatsby-plugin-prismic-previews
 */

import { componentResolverFromMap } from 'gatsby-plugin-prismic-previews'

import { linkResolver } from './linkResolver'

import Homepage from '../templates/index'
import SubscribePage from '../templates/subscribe'
import UnsubscribePage from '../templates/unsubscribe'
import ContactUsPage from '../templates/contact-us'
import CareersHelpPage from '../templates/careers-help'
import PrivacyPolicyPage from '../templates/privacy'
import TermsAndConditionsPage from '../templates/terms-and-conditions'
import RulesPage from '../templates/rules-page'
import EventsPage from '../templates/events'
import ThankYouWavePage from '../templates/thank-you-wave'
import ProductsPage from '../templates/products'
import ProductDetailsPage from '../templates/product-details'
import NewProductPage from '../templates/new-product'
import LandingPage from '../templates/landing-page'
import OurStoryPage from '../templates/our-vodka-story'
import AboutUsPage from '../templates/our-story'
import WishpondEmbeddedPage from '../templates/wishpond-page'
import DjaEmbeddedPage from "../templates/dja-page";
import DsarRequestPage from "../templates/dsar-request";

/**
 * Prismic preview configuration for each repository in your app. This set of
 * configuration objects will be used with the `withPrismicUnpublishedPreview`
 * higher order component.
 *
 * If your app needs to support multiple Prismic repositories, add each of
 * their own configuration objects here as additional elements.
 *
 * @see https://github.com/angeloashmore/gatsby-source-prismic/tree/alpha/packages/gatsby-plugin-prismic-previews#404-not-found-page
 */
export const unpublishedRepositoryConfigs = [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
    linkResolver,
    componentResolver: componentResolverFromMap({
      homepage: Homepage,
      subscribe_page: SubscribePage,
      unsubscribe_page: UnsubscribePage,
      contact_us_page: ContactUsPage,
      careers_help_page: CareersHelpPage,
      privacy_policy_page: PrivacyPolicyPage,
      terms_and_conditions_page: TermsAndConditionsPage,
      rules_page: RulesPage,
      events_page: EventsPage,
      thank_you_wave_page: ThankYouWavePage,
      products_page: ProductsPage,
      product_details_page: ProductDetailsPage,
      new_product_page: NewProductPage,
      landing_page: LandingPage,
      our_story_page: OurStoryPage,
      wishpond_page: WishpondEmbeddedPage,
      dja_page: DjaEmbeddedPage,
      about_us_page: AboutUsPage,
      dsar_page: DsarRequestPage
    }),
  },
];
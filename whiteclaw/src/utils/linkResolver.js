const { defaultLanguage } = require('../../prismic-configuration')
/**
 * The Link Resolver used for the Prismic repository. This function converts a
 * Prismic document to a URL within your app. It is used throughout your app to
 * resolve document links and support editor previews.
 *
 * {@link https://prismic.io/docs/technologies/link-resolver-gatsby}
 *
 * @param doc Prismic document to resolve to a URL within your app.
 *
 * @returns URL for the provided Prismic document.
 *
 * @type import('@prismicio/helpers').LinkResolverFunction
 */

exports.linkResolver = (doc) => {
  var returnLink;
  const shortLang =  doc?.lang?.slice(0, 2)
  // If lang is undefined No Prismic content for Spanish found
  // for a required page type (add spanish content page)

  if (doc.type === "homepage") {
    returnLink = doc.lang === defaultLanguage ? `/` : `/${shortLang}/`
  } else if (doc.type === "subscribe_page") {
    returnLink = doc.lang === defaultLanguage ? `/${doc.uid}` : `/${shortLang}/${doc.uid}`
  } else if (doc.type === "unsubscribe_page") {
    returnLink = doc.lang === defaultLanguage ? `/${doc.uid}` : `/${shortLang}/${doc.uid}`
  } else if (doc.type === "contact_us_page") {
    returnLink = doc.lang === defaultLanguage ? `/${doc.uid}` : `/${shortLang}/${doc.uid}`
  } else if (doc.type === "careers_help_page") {
    returnLink = doc.lang === defaultLanguage ? `/${doc.uid}` : `/${shortLang}/${doc.uid}`
  } else if (doc.type === "terms_and_conditions_page") {
    returnLink = doc.lang === defaultLanguage ? `/${doc.uid}` : `/${shortLang}/${doc.uid}`
  } else if (doc.type === "privacy_policy_page") {
    returnLink = doc.lang === defaultLanguage ? `/${doc.uid}` : `/${shortLang}/${doc.uid}`
  } else if (doc.type === "landing_page") {
    returnLink = doc.lang === defaultLanguage ? `/events/${doc.uid}` : `/${shortLang}/events/${doc.uid}`
  } else if (doc.type === "fullscreen_embedded_page") {
    returnLink = doc.lang === defaultLanguage ? `/${doc.uid}` : `/${shortLang}/${doc.uid}`
  } else if (doc.type === "wishpond_page") {
    returnLink = doc.lang === defaultLanguage ? `/sweepstakes/${doc.uid}` : `/sweepstakes/${shortLang}/${doc.uid}`
  } else if (doc.type === "microsite") {
    returnLink = doc.lang === defaultLanguage ? `/${doc.uid}` : `/${shortLang}/${doc.uid}`
  } else if (doc.type === "dja_page") {
    returnLink = doc.lang === defaultLanguage ? `/${doc.uid}` : `/${shortLang}/${doc.uid}`
  } else if (doc.type === "rules_page") {
    returnLink = doc.lang === defaultLanguage ? `/${doc.uid}` : `/${shortLang}/${doc.uid}`
  } else if (doc.type === "events_page") {
    returnLink = doc.lang === defaultLanguage ? `/${doc.uid}` : `/${shortLang}/${doc.uid}`
  } else if (doc.type === "thank_you_wave_page") {
    returnLink = doc.lang === defaultLanguage ? `/${doc.uid}` : `/${shortLang}/${doc.uid}`
  } else if (doc.type === "about_us_page") {
    returnLink = doc.lang === defaultLanguage ? `/${doc.uid}` : `/${shortLang}/${doc.uid}`
  } else if (doc.type === "product_details_page") {
    returnLink = doc.lang === defaultLanguage ? `/products/${doc.uid}` : `/${shortLang}/products/${doc.uid}`
  } else if (doc.type === "new_product_page" && doc.uid !== 'the-difference-is-clear') {
    returnLink = doc.lang === defaultLanguage ? `/new-products/${doc.uid}` : `/${shortLang}/new-products/${doc.uid}`
  } else if (doc.type === "new_product_page" && doc.uid === 'the-difference-is-clear') {
    returnLink = doc.lang === defaultLanguage ? `/${doc.uid}` : `/${shortLang}/${doc.uid}`
  } else if (doc.type === "our_story_page") {
    returnLink = doc.lang === defaultLanguage ? `/new-products/${doc.uid}` : `/${shortLang}/new-products/${doc.uid}`
  } else if (doc.type === "products_page") {
    returnLink = doc.lang === defaultLanguage ? `/${doc.uid}` : `/${shortLang}/${doc.uid}`
  } else if (doc.type === "dsar_page") {
    returnLink = doc.lang === defaultLanguage ? `/${doc.uid}` : `/${shortLang}/${doc.uid}`
  } else if (doc.type === "error_page") {
    returnLink = doc.lang === defaultLanguage ? `/error` : `/${shortLang}/error`
  } else {
    returnLink = `/`
  }

  return returnLink
}
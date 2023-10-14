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
  const shortLang = doc?.lang?.slice(0, 2)

  switch (doc.type) {
    case 'homepage': {
      return doc.lang === defaultLanguage ? '/' : `/${doc.lang}`
    }
    case 'cocktail': {
      return doc.lang === defaultLanguage
        ? `/cocktail/${doc.uid}`
        : `/${shortLang}/cocktail/${doc.uid}`
    }
    case 'cocktailshome': {
      return doc.lang === defaultLanguage
        ? `/${doc.uid}`
        : `/${shortLang}/${doc.uid}`
    }
    case 'contact': {
      return doc.lang === defaultLanguage
        ? `/${doc.uid}`
        : `/${shortLang}/${doc.uid}`
    }
    case 'enjoyresponsibly': {
      return doc.lang === defaultLanguage
        ? `/${doc.uid}`
        : `/${shortLang}/${doc.uid}`
    }
    case 'feature': {
      return doc.lang === defaultLanguage
        ? `/feature/${doc.uid}`
        : `/${shortLang}/feature/${doc.uid}`
    }
    case 'features': {
      return doc.lang === defaultLanguage
        ? `/${doc.uid}`
        : `/${shortLang}/${doc.uid}`
    }
    case 'gin': {
      return doc.lang === defaultLanguage
        ? `/gin/${doc.uid}`
        : `/${shortLang}/gin/${doc.uid}`
    }
    case 'ginhome': {
      return doc.lang === defaultLanguage
        ? `/${doc.uid}`
        : `/${shortLang}/${doc.uid}`
    }
    case 'nutritionalinfo': {
      return doc.lang === defaultLanguage
        ? `/${doc.uid}`
        : `/${shortLang}/${doc.uid}`
    }
    case 'ourethos': {
      return doc.lang === defaultLanguage
        ? `/${doc.uid}`
        : `/${shortLang}/${doc.uid}`
    }
    case 'ourstory': {
      return doc.lang === defaultLanguage
        ? `/${doc.uid}`
        : `/${shortLang}/${doc.uid}`
    }
    case 'storyarticle': {
      return doc.lang === defaultLanguage
        ? `/our-story/${doc.uid}`
        : `/${shortLang}/our-story/${doc.uid}`
    }

    case 'privacy': {
      return doc.lang === defaultLanguage
        ? `/${doc.uid}`
        : `/${shortLang}/${doc.uid}`
    }
    case 'terms': {
      return doc.lang === defaultLanguage
        ? `/${doc.uid}`
        : `/${shortLang}/${doc.uid}`
    }
    case 'whiskey': {
      return doc.lang === defaultLanguage
        ? `/whiskey/${doc.uid}`
        : `/${shortLang}/whiskey/${doc.uid}`
    }
    case 'whiskeyhome': {
      return doc.lang === defaultLanguage
        ? `/${doc.uid}`
        : `/${shortLang}/${doc.uid}`
    }
    default:
      return '/'
  }
}

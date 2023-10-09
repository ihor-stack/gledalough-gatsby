import { dataTrack } from "./functions"

// learn_more_clicked
const setLearnMoreClickedEvent = (data, ota)  => {

  const { url, referrer, name } = data

  // wait OneTrustCookie
  setTimeout(()=> {
    dataTrack('learn_more_clicked', {
      'click_url': url,
      'button_name': name,
      'referrer': referrer
    }, 'track', ota)
  }, 350)
}

// contact_us_form_submitted
const setContactUsFormSubmittedEvent = (data, ota)  => {

  const { topicId, topicName, batchn, sop, pt, pq, contact_us_flavor_name } = data

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'contact_us_form_submitted',
    'topic_id': topicId,
    'topic_name': topicName,
    'dtls': {
      'cus': {
        'batchn': batchn,
        'sop': sop,
        'pt': pt,
        'pq': pq,
        'contact_us_flavor_name': contact_us_flavor_name
      }
    }
  })
  if(ota) {
    window.analytics.track("Contact Us Form Submitted", {
      'topic_id': topicId,
      'topic_name': topicName,
      'batch_number': batchn,
      'state_of_purchase': sop,
      'package_type': pt,
      'package_quantity': pq,
      'contact_us_flavor_name': contact_us_flavor_name
    })
  }
}

// nutrition_ingredients_clicked
const setNutritionIngClickedEvent = (product, ota)  => {
  dataTrack('nutrition_ingredients_clicked', {
    'product_flavor': product.name,
    'product_category': product.category
  }, 'track', ota)
}

// email_subscription_signup
const setSubscriptionSignUpEvent = (location, ota)  => {
  dataTrack('email_subscription_signup', {
    'page_location': location,
  }, 'track', ota)
}

// email_popup_impression
const setSubscriptionPopUpShowEvent = (ota) =>{
  dataTrack('email_popup_impression', undefined, ota)
}


// category_viewed
const setCategoryViewedEvent = (data, ota) =>{

  const {category, tab } = data

  dataTrack('category_viewed', {
    'category': category,
    'view_by_section': tab
  }, 'track', ota)
}


// buy_now_clicked
const setBuyNowClickedEvent = (data, ota) =>{

  const { flavor, category } = data

  dataTrack('buy_now_clicked', {
    'product_flavor': flavor,
    'product_category': category
  }, 'track', ota)
}

// social_icon_clicked
const setSocialIconClickedEvent = (data, ota) =>{

  const { platform, location } = data

  dataTrack('social_icon_clicked', {
    'social_platform': platform,
    'page_location': location
  }, 'track', ota)
}


// email_unsubscribe_confirmed
const setUnsubscribeConfirmedEvent = (ota) =>{
  dataTrack('email_unsubscribe_confirmed', undefined, 'track', ota)
}

// social_post_clicked
const setSocialPostClickedEvent = (data, ota) =>{

  const { link, position } = data

  dataTrack('social_post_clicked', {
    'outbound_link': link,
    'tile_position': position
  }, 'track', ota)
}


// event_sign_up_clicked
const setEventSignUpClickedEvent = (data, ota) =>{

  const {url, name, location} = data

  dataTrack('event_sign_up_clicked', {
    'click_url': url,
    'event_name': name,
    'event_location': location
  }, 'track', ota)
}


// event_viewed_clicked
const setEventViewedEvent = (data, ota) =>{

  const {url, name, location, status} = data

  dataTrack('event_viewed_clicked', {
    'click_url': url,
    'event_name': name,
    'event_location': location,
    'event_status': status
  }, 'track', ota)
}

// product_flavor_viewed
const setProductFlavorViewedEvent = (data, ota) =>{

  const {flavor, category, size} = data

  dataTrack('product_viewed', {
    'page_category': 'PDP',
    'product_flavor': flavor,
    'product_category': category,
    'product_size': size
  }, 'track', ota)
}

// product_flavor_clicked
const setProductFlavorClickedEvent = (data, ota) =>{

  const {flavor, category, position, url, location, size} = data

  // wait OneTrustCookie
  setTimeout(()=>{
    dataTrack('product_flavor_clicked', {
      'product_flavor': flavor,
      'product_category': category,
      'product_position': position,
      'page_url': url,
      'page_location': location,
      'product_size': size
    }, 'track', ota)
  }, 350)
}

// global lang and country
const setGlobalLangAndCountryEvent = (lang, ota) => {
  dataTrack(undefined, {
    'country': 'US',
    'language': lang
  }, 'page', ota)
}

// view_by_selection
const setViewByRangeEvent = (data, ota) => {
  dataTrack('view_by_selection', {
    'view_by_selection': data
  }, 'track', ota)
}


export {
  setLearnMoreClickedEvent,
  setContactUsFormSubmittedEvent,
  setNutritionIngClickedEvent,
  setSubscriptionSignUpEvent,
  setSubscriptionPopUpShowEvent,
  setCategoryViewedEvent,
  setBuyNowClickedEvent,
  setSocialPostClickedEvent,
  setSocialIconClickedEvent,
  setProductFlavorViewedEvent,
  setProductFlavorClickedEvent,
  setGlobalLangAndCountryEvent,
  setEventSignUpClickedEvent,
  setEventViewedEvent,
  setUnsubscribeConfirmedEvent,
  setViewByRangeEvent
}
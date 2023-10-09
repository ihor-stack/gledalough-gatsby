const BASE_URL = {
  PROD: "https://api.markanthony.com/ConsumerResponses/response",
  DEV: "https://consumerresponses-api-dev.markanthony.com/response",
  LOCAL: "http://localhost:56432/response",
  TEST: ''
}

const SUBSCRIPTION_SIGN_UP_BASE_URL = {
  PROD: "https://api.markanthony.com/ActiveCampaign/Contacts",
  TEST: ''
}

export  { BASE_URL, SUBSCRIPTION_SIGN_UP_BASE_URL }
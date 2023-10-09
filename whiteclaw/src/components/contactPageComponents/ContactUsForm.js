// core
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// form validation
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

// components
import WindowModal from './WindowModal'
import HiddenFields from './HiddenFields'
import SuccessFailModal from "./SuccessFailModal"
import StateResidence from './StateResidence'

// Resources
import usaStatesList from "../../assets/resources/usa-states-list.json"
import { validateDobField, validateTimeStampField } from "../../assets/js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { setContactUsFormSubmittedEvent, setSubscriptionSignUpEvent } from "../../assets/js/data-layer";
import { useOneTrust } from '../../components/OneTrustContext'

// constants
import { ONLY_ALPHABET_CHARACTERS } from "../../constants/regexpPatterns";
import { FORM_OPTIONS } from "../../constants/formOptions";
import { BASE_URL } from "../../constants/baseUrl";
import { VALIDATION_EN, VALIDATION_ES } from "../../constants/formValidation";
import { SUBSCRIPTION_FORM } from "../../constants/subscriptionFormLocation";

const ContactUsForm = ({ activeDocMeta }) => {
  const { lang } = activeDocMeta ? activeDocMeta : "en-us"
  const validations = lang === "en-us" ? VALIDATION_EN : VALIDATION_ES
  const oneTrustAccepted = useOneTrust()

  const ContactUsFormSchema = Yup.object().shape({
    email: Yup.string().required(validations.provideEmail).email(validations.provideValidEmail),
    inquiryTypeID: Yup.string().required(validations.selectTopic),
    firstName: Yup.string()
      .required(validations.provideFirstName)
      .min(2, validations.tooShort)
      .max(32, validations.tooLong)
      .matches(ONLY_ALPHABET_CHARACTERS, validations.onlyAlpha),
    lastName: Yup.string()
      .required(validations.provideLastName)
      .min(2, validations.tooShort)
      .max(32, validations.tooLong)
      .matches(ONLY_ALPHABET_CHARACTERS, validations.onlyAlpha),
    // birthDate: Yup.date().required(validations.enterBday).typeError(validations.validBday),
    birthDate: Yup.string()
      .required(validations.enterBday)
      .typeError(validations.validBday)
      .test('valid-birth-date', validations.validBday, (value) => {
        const birthDateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2]\d|3[0-1])\/\d{4}$/; // MM/DD/YYYY
        if (!value) return true; // Allow empty values, Yup.date() already checks for date format
        return birthDateRegex.test(value);
      }),
    message: Yup.string().required(validations.provideMsg),
    batchNumber: Yup.string().when(["inquiryTypeID", "extraFieldsCheckbox"], {
      is: (inquiryTypeID, extraFieldsCheckbox) => inquiryTypeID === "100000003" && extraFieldsCheckbox === false,
      then: Yup.string()
      .required(validations.provideBatchCode)
      .min(9, validations.batchNumberMinLeng),
      otherwise: Yup.string().notRequired(),
    }),
    timeStamp: Yup.string().when(["inquiryTypeID", "extraFieldsCheckbox"], {
      is: (inquiryTypeID, extraFieldsCheckbox) => inquiryTypeID === "100000003" && extraFieldsCheckbox === false,
      then: Yup.string()
      .required(validations.provideTimeStamp)
      .min(5, validations.timeStampMinLeng),
      otherwise: Yup.string().notRequired(),
    }),
    lineNumber: Yup.string().when(["inquiryTypeID", "extraFieldsCheckbox"], {
      is: (inquiryTypeID, extraFieldsCheckbox) => inquiryTypeID === "100000003" && extraFieldsCheckbox === false,
      then: Yup.string()
      .required(validations.provideLineNumber)
      .min(2, validations.lineNumberMinLeng),
      otherwise: Yup.string().notRequired(),
    }),
    usaStatesList: Yup.string().when("inquiryTypeID", {
      is: (val) => val === "100000003",
      then: Yup.string().required(validations.pleaseSelectStateOfPurchase),
      otherwise: Yup.string().notRequired(),
    }),
    packageType: Yup.string().when("extraFieldsCheckbox", {
      is: (val) => val === true,
      then: Yup.string().required(validations.pleaseSelectPackageType),
      otherwise: Yup.string().notRequired(),
    }),
    packageQuantity: Yup.string().when("extraFieldsCheckbox", {
      is: (val) => val === true,
      then: Yup.string().required(validations.selectPackageQuantity),
      otherwise: Yup.string().notRequired(),
    }),
    flavorName: Yup.string().when("extraFieldsCheckbox", {
      is: (val) => val === true,
      then: Yup.string().required(validations.provideFlavorName),
      otherwise: Yup.string().notRequired(),
    }),
  });

  const [birthDayValue, setBirthDayValue] = useState("")
  const [timeStampValue, setTimeStampValue] = useState("")
  const [batchNumberValue, setBatchNumberValue] = useState("")
  const [lineNumberValue, setLineNumberValue] = useState("")
  const [batchCharValidationMsg, setBatchCharValidationMsg] = useState("")
  const [lineNumberValidationMsg, setLineNumberValidationMsg] = useState("")
  const [storeStateOptions, setStoreStateOptions] = useState([])
  const [showWindowModal, setShowWindowModal] = useState(false)
  const [windowModalType, setWindowModalType] = useState("")
  const [extraFieldsContainer, setExtraFieldsContainer] = useState(false)
  const [extraFieldsBtnText, setExtraFieldsBtnText] = useState(validations.dontHaveBatchNumber)

  // show success fail modal functions
  let [userName, setUserName] = useState(false)
  let [modalBodyCopy, setModalBodyCopy] = useState("")
  const [showSuccessFailModal, setShowSuccessFailModal] = useState(false)
  const closeSuccessFailModal = () => setShowSuccessFailModal(false)

  // toggle btn
  const toggleExtraFieldsContainer = (e) => {

    if (!extraFieldsContainer) {
      setBatchNumberValue(validations.naDD)
      setTimeStampValue(validations.naDD)
      setLineNumberValue(validations.naDD)
      setBatchCharValidationMsg("")
      setLineNumberValidationMsg("")
      setExtraFieldsBtnText(validations.enterProductDetails)
    } else {
      setBatchNumberValue("")
      setTimeStampValue("")
      setLineNumberValue("")
      setExtraFieldsBtnText(validations.dontHaveBatchNumber)
    }

    setExtraFieldsContainer(!extraFieldsContainer)
  }

  // Window Modal Func
  const closeWindowModal = () => setShowWindowModal(false)
  const openWindowModal = (e, windowModalType) => {
    e.preventDefault()
    setWindowModalType(windowModalType)
    setShowWindowModal(true)
  }

  const buildUSAstatesList = async () => {
    try {
      let options = []
      options.push({ "value": "", "label": validations.selectState })
      for (var key in usaStatesList) {
        options.push({ "value": usaStatesList[key], "label": usaStatesList[key] })
      }
      setStoreStateOptions(options)
    } catch (error) {
      console.log('responseData: ', 'failed')
    }
  }

  const handleBirthDateChange = (e) => {
    const output = validateDobField(e)
    setBirthDayValue(output.join('').substr(0, 10))
  }

  const handleBatchNumberChange = (e) => {
    let enteredValue = e.target.value.toUpperCase()
    let validatedValue = ''

    // If input is empty clear error message
    if (enteredValue === "") { setBatchCharValidationMsg("") }

    // For loop validation conditions for each char
    for (let i = 0; i < enteredValue.length; i++) {
      let char = enteredValue.charAt(i)

      // By the string index validate each char Ex: "K1522L9GL"
      // Validate K then 1 then 5 and so on.

      // Alphabet character from A to M, excluding I
      if (i === 0 && /^[A-HJ-M]+$/.test(char)) {
        setBatchCharValidationMsg("")
        validatedValue += char
      } else if (i === 0) {
        setBatchCharValidationMsg(validations.batchValidationChar_1)
      }
      // 1 or 2 or 3 only
      if (i === 1 && /^[123]+$/.test(char)) {
        setBatchCharValidationMsg("")
        validatedValue += char
      } else if (i === 1) {
        setBatchCharValidationMsg(validations.batchValidationChar_2)
      }
      // Any number 0 to 9
      if (i === 2 && /^[0-9]+$/.test(char)) {
        setBatchCharValidationMsg("")
        validatedValue += char
      } else if (i === 2) {
        setBatchCharValidationMsg(validations.batchValidationChar_3_or_5)
      }
      // 2 or 3 only
      if (i === 3 && /^[23]+$/.test(char)) {
        setBatchCharValidationMsg("")
        validatedValue += char
      } else if (i === 3) {
        setBatchCharValidationMsg(validations.batchValidationChar_4)
      }
      // Any number 0 to 9
      if (i === 4 && /^[0-9]+$/.test(char)) {
        setBatchCharValidationMsg("")
        validatedValue += char
      } else if (i === 4) {
        setBatchCharValidationMsg(validations.batchValidationChar_3_or_5)
      }
      // Any number or letter. No special characters
      if (i === 5 && /^[0-9A-Z]+$/.test(char)) {
        setBatchCharValidationMsg("")
        validatedValue += char
      } else if (i === 5) {
        setBatchCharValidationMsg(validations.batchValidationChar_6_or_7)
      }
      // Any number or letter. No special characters
      if (i === 6 && /^[0-9A-Z]+$/.test(char)) {
        setBatchCharValidationMsg("")
        validatedValue += char
      } else if (i === 6) {
        setBatchCharValidationMsg(validations.batchValidationChar_6_or_7)
      }
      // Any letter. No number or special characters
      if (i === 7 && /^[A-Z]+$/.test(char)) {
        setBatchCharValidationMsg("")
        validatedValue += char
      } else if (i === 7) {
        setBatchCharValidationMsg(validations.batchValidationChar_8_or_9)
      }
      // Any letter. No number or special characters
      if (i === 8 && /^[A-Z]+$/.test(char)) {
        setBatchCharValidationMsg("")
        validatedValue += char
      } else if (i === 8) {
        setBatchCharValidationMsg(validations.batchValidationChar_8_or_9)
      }
    }
    setBatchNumberValue(validatedValue)
  }

  const handleTimeStampChange = (e) => {
    const output = validateTimeStampField(e)
    setTimeStampValue(output.join('').substr(0, 5))
  }

  const handleLineNumberChange = (e) => {
    let enteredValue = e.target.value.toUpperCase()
    let validatedValue = ''

    // If input is empty clear error message
    if (enteredValue === "") { setLineNumberValidationMsg("") }

    // For loop validation conditions for each char
    for (let i = 0; i < enteredValue.length; i++) {
      let char = enteredValue.charAt(i)

      // Any number or letter. No special characters
      if (/^[0-9A-Z]+$/.test(char)) {
        setLineNumberValidationMsg("")
        validatedValue += char
      } else {
        setLineNumberValidationMsg(validations.lineNumberValidationFormat)
      }
    }
    setLineNumberValue(validatedValue)
  }

  const isBrowser = typeof window !== "undefined"
  // get ? query value
  const queryParams = isBrowser && new URLSearchParams(window.location.search)
  const subject = isBrowser && queryParams.get("subject")

  // preset default inquiryTypeID value
  const presetInquiryTypeID = subject ? "100000013" : ""

  // analytics script
  const [segmentID, setSegmentID] = useState("")

  useEffect(() => {
    buildUSAstatesList().then()

    const waitWindowAnalyticsObj = () => {
      if (typeof window !== "undefined") {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        let analyticsLocalObj = window.analytics
        if (analyticsLocalObj && oneTrustAccepted) {

          // prevent page down in incognito mood when clicking on "Confirm My Choices" on OneTrust
          const  anonymous_id = analyticsLocalObj.hasOwnProperty('user')
              ? analyticsLocalObj.user().anonymousId() : analyticsLocalObj.group().hasOwnProperty('anonymousId')
                  ? analyticsLocalObj.group().anonymousId() : ''

          setSegmentID(anonymous_id)
        } else {
          setTimeout(waitWindowAnalyticsObj, 250)
        }
      }
    }
    waitWindowAnalyticsObj()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oneTrustAccepted])

  let isSubmitBlocked = false

  return (
      <>
        {/* Form */}
        <Formik
            initialValues={ // initial form values
              {
                email: "",
                inquiryTypeID: presetInquiryTypeID,
                firstName: "",
                lastName: "",
                birthDate: "",
                message: "",
                optInCheckBox: false,
                batchNumber: "",
                timeStamp: "",
                lineNumber: "",
                usaStatesList: "",
                extraFieldsCheckbox: false,
                packageType: "",
                packageQuantity: "",
                flavorName: ""
              }
            }

            validationSchema={ContactUsFormSchema}

            onSubmit={(values, { setSubmitting, resetForm }) => {
              let extraDetails = [];
              // Add segmentId to extraDetails[]
              extraDetails.push({ KeyName: 'segmentId', Value: segmentID });
              extraDetails.push({ KeyName: 'Message', Value: values.message.trim() });

              if(values.inquiryTypeID === '100000003') {
                extraDetails.push({ KeyName: 'BatchCode', Value: values.batchNumber.trim() });
                extraDetails.push({ KeyName: 'TimeStamp', Value: values.timeStamp.trim() });
                extraDetails.push({ KeyName: 'LineNumber', Value: values.lineNumber.trim() });
                extraDetails.push({ KeyName: 'StoreState', Value: values.usaStatesList.trim() });
                if (values.extraFieldsCheckbox === true) {
                  extraDetails.push({ KeyName: 'PackageType', Value: values.packageType.trim() });
                  extraDetails.push({ KeyName: 'PackageQuantity', Value: values.packageQuantity.trim() });
                  extraDetails.push({ KeyName: 'PackageFlavor', Value: values.flavorName.trim() });
                }
              }

              if (['100000000', '100000001', '100000006'].includes(values.inquiryTypeID)) {
                extraDetails.push({ KeyName: 'StoreState', Value: values.usaStatesList.trim() });
              }

              let data = {
                ApplicationID: 839,
                Email: values.email.trim(),
                InquiryTypeID: values.inquiryTypeID,
                FirstName: values.firstName.trim(),
                LastName: values.lastName.trim(),
                BirthDate: values.birthDate.trim(),
                Message: values.message.trim(),
                optInCheckBox: values.optInCheckBox,
                ExtraDetails: extraDetails
              }

              //data layer data
              const dlData = {
                topicId: values.inquiryTypeID,
                topicName: FORM_OPTIONS.get(values.inquiryTypeID),
                batchn: values.batchNumber.trim(),
                sop: values.usaStatesList.trim(),
                pt: values.packageType.trim(),
                pq: values.packageQuantity.trim(),
                contact_us_flavor_name: values.flavorName.trim()
              }

              if(!isSubmitBlocked) {
                isSubmitBlocked = true

                axios({
                  method: "POST",
                  url: BASE_URL.PROD,
                  data: JSON.stringify(data),
                  cache: false,
                  headers: {
                    "Content-Type": "application/json; charset=utf-8"
                  }
                }).then(function (response) {
                  isSubmitBlocked = false

                  // set data to data-layer
                  setContactUsFormSubmittedEvent(dlData, oneTrustAccepted)

                  if(values.optInCheckBox){
                    setSubscriptionSignUpEvent(SUBSCRIPTION_FORM.CONTACT_US_PAGE, oneTrustAccepted)
                  }

                  // Set data for success fail modal
                  setUserName(values.firstName.trim())
                  setModalBodyCopy(validations.messageYes)
                  setShowSuccessFailModal(true)
                  // Rest birthday
                  setBirthDayValue("")
                  // Reset timeStamp
                  setTimeStampValue("")
                  // Reset batchCode
                  setBatchNumberValue("")
                  // Reset lineNumber
                  setLineNumberValue("")
                  // Reset form
                  resetForm()
                }).catch(function () {
                  isSubmitBlocked = false
                  // Set data for success fail modal
                  setUserName(values.firstName.trim())
                  setModalBodyCopy(validations.messageNo)
                  setShowSuccessFailModal(true)
                  // Rest birthday
                  setBirthDayValue("")
                  // Reset timeStamp
                  setTimeStampValue("")
                  // Reset batchCode
                  setBatchNumberValue("")
                  // Reset lineNumber
                  setLineNumberValue("")
                  // Reset form
                  resetForm()
                })
                setSubmitting(false)
              }
            }}
        >

          {({ values, errors, submitCount, handleChange, setFieldValue }) => {
            return (
                <Form id="frm-contact-form" autoComplete="off">
                  <div className="row">
                    <div className="col-md-6 form-group control-group">
                      {/* Email */}
                      <Field type="email" id="form-email" className="form-control" name="email" placeholder={validations.email} />

                      {submitCount > 0 && errors.email !== "" ? (
                          <>
                            <div className="help-block with-errors">
                              <ul role="alert" className={"list-unstyled " + (!errors.email ? "d-none" : "")}>
                                <li>{errors.email}</li>
                              </ul>
                            </div>
                          </>
                      ) : null}
                    </div>

                    <div className="col-md-6 form-group">
                      <label className="select">
                        {/* Inquiry Type */}
                        <Field
                            as="select"
                            className="form-control"
                            name="inquiryTypeID"
                            onChange={(e) => {
                              const value = e.target.value;
                              setFieldValue("inquiryTypeID", value);
                              if (value !== "100000003") {
                                if (!extraFieldsContainer) {
                                  setFieldValue("batchNumber", "")
                                  setBatchNumberValue("")
                                  setFieldValue("timeStamp", "")
                                  setTimeStampValue("")
                                  setFieldValue("lineNumber", "")
                                  setLineNumberValue("")
                                }
                                setFieldValue("usaStatesList", "");
                                setFieldValue("packageType", "");
                                setFieldValue("packageQuantity", "");
                                setFieldValue("flavorName", "");
                                // setFieldValue("extraFieldsCheckbox", false)
                                setBatchCharValidationMsg("")
                                setLineNumberValidationMsg("")
                              }
                            }}
                        >
                          <option value="">{validations.pleaseSelectTopic}</option>
                          <option value="100000003" data-subject={validations.qualityConcern}>
                            {validations.qualityConcern}
                          </option>
                          <option value="100000012" data-subject={validations.cantFindProducts}>
                            {validations.cantFindProducts}
                          </option>
                          <option value="100000005" data-subject={validations.sponsorRequest}>
                            {validations.sponsorRequest}
                          </option>
                          <option value="100000007" data-subject={validations.partnerMedia}>
                            {validations.partnerMedia}
                          </option>
                          <option value="100000002" data-subject={validations.ingredientNutr}>
                            {validations.ingredientNutr}
                          </option>
                          <option value="100000006" data-subject={validations.coupon}>
                            {validations.coupon}
                          </option>
                          <option value="100000001" data-subject={validations.prodFlavFeedback}>
                            {validations.prodFlavFeedback}
                          </option>
                          <option value="100000008" data-subject={validations.expDate}>
                            {validations.expDate}
                          </option>
                          <option value="100000009" data-subject={validations.intDisReq}>
                            {validations.intDisReq}
                          </option>
                          <option value="100000010" data-subject={validations.distInfoReq}>
                            {validations.distInfoReq}
                          </option>
                          <option value="100000011" data-subject={validations.sweepsContInq}>
                            {validations.sweepsContInq}
                          </option>
                          <option value="100000000" data-subject={validations.other}>
                            {validations.other}
                          </option>
                        </Field>
                        <FontAwesomeIcon icon={faChevronDown} className="fa-solid" />
                        {submitCount > 0 && errors.inquiryTypeID !== "" ? (
                            <>
                              <div className="help-block with-errors">
                                <ul role="alert" className={"list-unstyled " + (!errors.inquiryTypeID ? "d-none" : "")}>
                                  <li>{errors.inquiryTypeID}</li>
                                </ul>
                              </div>
                            </>
                        ) : null}
                      </label>
                    </div>
                  </div>

                  <div className={"row hidden-block batch-code " + (values.inquiryTypeID === "100000003" ? "" : "toggle-hide")}>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-12">
                          <p>
                            {validations.qualityTxt01}
                            &nbsp;
                            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                            <a href="#" onClick={(e) => openWindowModal(e, 'batchimage')}>
                              {validations.viewImage}
                            </a>.
                          </p>
                          <p>
                            {validations.qualityTxt02}
                          </p>
                          <p className="form-btn-container">
                            <button type="button" className="form-btn form-btn-long-text" onClick={(e) => openWindowModal(e, 'decipherbatchnumber')}>{validations.decipherBatch}</button>
                          </p>
                          {/* WindowModal Component Batch / Decipher */}
                          <WindowModal
                          showWindowModal={showWindowModal}
                          closeWindowModal={closeWindowModal}
                          windowModalType={windowModalType}
                          lang={lang}
                          />
                        </div>

                        {/* USA State of Residence component -- Rendered for InquieryType = "100000003" */}
                        { values.inquiryTypeID === "100000003" ?
                        <div className="col-12 col-md-6">
                          <StateResidence
                            name="usaStatesList"
                            storeStateOptions={storeStateOptions}
                            submitCount={submitCount}
                            validations={validations}
                            errors={errors}
                          />
                        </div>
                        :
                        null
                        }

                        <div className="col-12 col-md-6 form-group">
                          {/* Extra Fields Checkbox */}
                          <label className="btn btn-block extra-fields-checkbox">
                            <Field
                                type="checkbox"
                                name="extraFieldsCheckbox"
                                id="extra-fields-checkbox"
                                className="visually-hidden"
                                onClick={toggleExtraFieldsContainer}
                            />
                            {extraFieldsBtnText}
                          </label>

                          {submitCount > 0 && errors.extraFieldsCheckbox !== "" ? (
                              <>
                                <div className="help-block with-errors">
                                  <ul role="alert" className={"list-unstyled " + (!errors.extraFieldsCheckbox ? "d-none" : "")}>
                                    <li>{errors.extraFieldsCheckbox}</li>
                                  </ul>
                                </div>
                              </>
                          ) : null}
                        </div>

                        <div className="col-12 col-md-4 form-group">
                          {/* Batch Number */}
                          <Field
                          type="text"
                          id="form-batchcode"
                          className="form-control"
                          name="batchNumber"
                          maxLength={9}
                          placeholder={validations.batchNumberDD}
                          onChange={ handleBatchNumberChange }
                          value={(values.batchNumber = batchNumberValue)}
                          disabled={extraFieldsContainer}
                          />
                          {/*
                          ----------------------------------------------------------------------------------
                          */}
                          {submitCount > 0 && errors.batchNumber !== "" && values.batchNumber !== "N/A" ? (
                              <>
                                <div className="help-block with-errors">
                                  <ul role="alert" className={"list-unstyled " + (!errors.batchNumber ? "d-none" : "")}>
                                    <li>{errors.batchNumber}</li>
                                  </ul>
                                </div>
                              </>
                          ) : null}

                          {batchCharValidationMsg !== "" ? (
                            <>
                              <div className="help-block with-errors">
                                <ul role="alert" className={"list-unstyled " + (!batchCharValidationMsg ? "d-none" : "")}>
                                  <li>{batchCharValidationMsg}</li>
                                </ul>
                              </div>
                            </>
                          ) : null}
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 form-group">
                          {/* Time Stamp */}
                          <Field
                          type="text"
                          id="form-timeStamp"
                          className="form-control"
                          name="timeStamp"
                          maxLength={5}
                          placeholder={validations.timeStampDD}
                          onChange={ handleTimeStampChange }
                          value={(values.timeStamp = timeStampValue)}
                          disabled={extraFieldsContainer}
                          />
                          {/*
                           ----------------------------------------------------------------------------------
                          */}
                          {submitCount > 0 && errors.timeStamp !== "" && values.timeStamp !== "N/A" ? (
                              <>
                                <div className="help-block with-errors">
                                  <ul role="alert" className={"list-unstyled " + (!errors.timeStamp ? "d-none" : "")}>
                                    <li>{errors.timeStamp}</li>
                                  </ul>
                                </div>
                              </>
                          ) : null}
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 form-group">
                          {/* Line Number */}
                          <Field
                          type="text"
                          id="form-lineNumber"
                          className="form-control"
                          name="lineNumber"
                          maxLength={2}
                          placeholder={validations.lineNumberDD}
                          onChange={ handleLineNumberChange }
                          value={(values.lineNumber = lineNumberValue)}
                          disabled={extraFieldsContainer}
                          />
                          {/*
                          ----------------------------------------------------------------------------------
                          */}
                          {submitCount > 0 && errors.lineNumber !== "" && values.lineNumber !== "N/A" ? (
                              <>
                                <div className="help-block with-errors">
                                  <ul role="alert" className={"list-unstyled " + (!errors.lineNumber ? "d-none" : "")}>
                                    <li>{errors.lineNumber}</li>
                                    </ul>
                                </div>
                              </>
                          ) : null}

                          {lineNumberValidationMsg !== "" ? (
                            <>
                              <div className="help-block with-errors">
                                <ul role="alert" className={"list-unstyled " + (!lineNumberValidationMsg ? "d-none" : "")}>
                                  <li>{lineNumberValidationMsg}</li>
                                </ul>
                              </div>
                            </>
                          ) : null}
                        </div>

                        {/* Extra Fields */}
                        <div className="col-12">
                          <div className="row">
                            <div className="col-12">
                              <div id="extra-fields-container" className={"row " + (extraFieldsContainer ? "" : "d-none")}>
                                <div className="col-12 col-md-4 form-group">
                                  <label className="select">
                                    {/* Package Type */}
                                    <Field as="select" id="form-package-type" className="extra-fields-js form-control" name="packageType">
                                      <option value="">{validations.selectPackageTypeDD}</option>
                                      <option value={validations.canDD} data-subject={validations.canDD}>
                                        {validations.canDD}
                                      </option>
                                    </Field>
                                    <FontAwesomeIcon icon={faChevronDown} className="fa-solid" />

                                    {submitCount > 0 && errors.packageType !== "" ? (
                                        <>
                                          <div className="help-block with-errors">
                                            <ul role="alert" className={"list-unstyled " + (!errors.packageType ? "d-none" : "")}>
                                              <li>{errors.packageType}</li>
                                            </ul>
                                          </div>
                                        </>
                                    ) : null}
                                  </label>
                                </div>

                                <div className="col-12 col-md-4 form-group">
                                  <label className="select">
                                    {/* Package Quantity */}
                                    <Field as="select" id="form-package-quantity" className="extra-fields-js form-control" name="packageQuantity">
                                      <option value="">{validations.packageQuantityDD}</option>
                                      <option value={validations.singleDD} data-subject={validations.singleDD}>
                                        {validations.singleDD}
                                      </option>
                                      <option value={validations.sixPackDD} data-subject={validations.sixPackDD}>
                                        {validations.sixPackDD}
                                      </option>
                                      <option value={validations.eightPackDD} data-subject={validations.eightPackDD}>
                                        {validations.eightPackDD}
                                      </option>
                                      <option value={validations.twelvePackDD} data-subject={validations.twelvePackDD}>
                                        {validations.twelvePackDD}
                                      </option>
                                      <option value={validations.twentyFourPackDD} data-subject={validations.twentyFourPackDD}>
                                        {validations.twentyFourPackDD}
                                      </option>
                                    </Field>
                                    <FontAwesomeIcon icon={faChevronDown} className="fa-solid" />
                                    {submitCount > 0 && errors.packageQuantity !== "" ? (
                                        <>
                                          <div className="help-block with-errors">
                                            <ul role="alert" className={"list-unstyled " + (!errors.packageQuantity ? "d-none" : "")}>
                                              <li>{errors.packageQuantity}</li>
                                            </ul>
                                          </div>
                                        </>
                                    ) : null}
                                  </label>
                                </div>

                                <div className="col-12 col-md-4 form-group">
                                  {/* Flavor Name */}
                                  <Field type="text" id="form-flavor-name" className="extra-fields-js form-control" name="flavorName" placeholder={validations.flavorNameDD} />

                                  {submitCount > 0 && errors.flavorName !== "" ? (
                                      <>
                                        <div className="help-block with-errors">
                                          <ul role="alert" className={"list-unstyled " + (!errors.flavorName ? "d-none" : "")}>
                                            <li>{errors.flavorName}</li>
                                          </ul>
                                        </div>
                                      </>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Hidden Fields Component */}
                  <HiddenFields inquiryTypeID={values.inquiryTypeID} lang={lang} validations={validations} />

                  <div className="row">
                    {/* USA State of Residence component -- Rendered for InquieryTypes = "100000000" , "100000001" , "100000006" */}
                    { ["100000000", "100000001", "100000006"].includes(values.inquiryTypeID)
                      ?
                      <div className="col-md-12">
                        <StateResidence
                          name="usaStatesList"
                          storeStateOptions={storeStateOptions}
                          submitCount={submitCount}
                          validations={validations}
                          errors={errors}
                        />
                      </div>
                      :
                      null
                    }

                    <div className="col-md-4 form-group">
                      {/* First Name */}
                      <Field type="text" id="form-firstname" className="form-control" name="firstName" placeholder={validations.firstNameDD} />

                      {submitCount > 0 && errors.firstName !== "" ? (
                          <>
                            <div className="help-block with-errors">
                              <ul role="alert" className={"list-unstyled " + (!errors.firstName ? "d-none" : "")}>
                                <li>{errors.firstName}</li>
                              </ul>
                            </div>
                          </>
                      ) : null}
                    </div>

                    <div className="col-md-4 form-group">
                      {/* Last Name */}
                      <Field type="text" id="form-lastname" className="form-control" name="lastName" placeholder={validations.lastNameDD} />

                      {submitCount > 0 && errors.lastName !== "" ? (
                          <>
                            <div className="help-block with-errors">
                              <ul role="alert" className={"list-unstyled " + (!errors.lastName ? "d-none" : "")}>
                                <li>{errors.lastName}</li>
                              </ul>
                            </div>
                          </>
                      ) : null}
                    </div>

                    <div className="col-md-4 form-group">
                      {/* Birthday */}
                      <Field
                          type="text"
                          id="form-birthdate"
                          className="form-control"
                          name="birthDate"
                          placeholder={ validations.birthDateDD }
                          onChange={ handleBirthDateChange }
                          value={(values.birthDate = birthDayValue)}
                      />

                      {submitCount > 0 && errors.birthDate !== "" ? (
                          <>
                            <div className="help-block with-errors">
                              <ul role="alert" className={"list-unstyled " + (!errors.birthDate ? "d-none" : "")}>
                                <li>{errors.birthDate}</li>
                              </ul>
                            </div>
                          </>
                      ) : null}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 form-group form-text-field">
                      {/* Message */}
                      <Field as="textarea" id="form-message" className="form-control" name="message" rows="5" type="text" placeholder={validations.msgDD} />

                      {submitCount > 0 && errors.message !== "" ? (
                          <>
                            <div className="help-block with-errors">
                              <ul role="alert" className={"list-unstyled " + (!errors.message ? "d-none" : "")}>
                                <li>{errors.message}</li>
                              </ul>
                            </div>
                          </>
                      ) : null}
                    </div>

                    {lang === "en-us" ? (
                        <div className="col-12 col-xl-10 form-group">
                          <div className="subscribe-checkbox checkbox">
                            <label className="active-campaing-checkbox-label">
                              {/* OptIn CheckBox NewsLetter */}
                              <Field id="opt-in-checkbox" type="checkbox" name="optInCheckBox" />
                              &nbsp;
                              <span className="checkmark"></span>
                              &nbsp;
                              <span className="label-copy">
                                  By checking this box, you agree to receive emails from Mark Anthony Brands International ('MABI') and its brands about their
                                  products and services, including marketing and promotional emails. You can unsubscribe any time.
                                  For more information about how we use your information, see our <a href='/privacy' target='_blank' title='Privacy Policy'>Privacy Policy</a>.
                              </span>
                            </label>
                          </div>
                        </div>
                    ) : null}

                    <div className={`col-12 ${lang === "en-us" ? 'col-xl-2' : ''} form-group form-text-field form-btn-container d-flex justify-content-end`}>
                      {/* Submit Btn */}
                      <button className="form-btn" type="submit" id="submit-contact-form">
                        {validations.submitBtn}
                      </button>
                    </div>
                  </div>
                  {/* Success Fail Component */}
                  <SuccessFailModal showSuccessFailModal={showSuccessFailModal} closeSuccessFailModal={closeSuccessFailModal} userName={userName} modalBodyCopy={modalBodyCopy} activeLang={lang}/>
                </Form>
            );
          }}
        </Formik>
        {/* Eof form */}
      </>
  )
}

export default ContactUsForm






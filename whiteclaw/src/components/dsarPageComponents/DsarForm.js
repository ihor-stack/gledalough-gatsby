// core
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// form validation
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

// assets
import { validateDobField } from "../../assets/js";

// components
import HiddenFields from "../contactPageComponents/HiddenFields";
import SuccessFailModal from "../contactPageComponents/SuccessFailModal";
import { useOneTrust } from "../OneTrustContext";

// Resources
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


// constants
import { ONLY_ALPHABET_CHARACTERS } from "../../constants/regexpPatterns";
import { BASE_URL } from "../../constants/baseUrl";
import { VALIDATION_EN, VALIDATION_ES } from "../../constants/formValidation";


const DsarForm = ({ activeDocMeta }) => {
  const { lang } = activeDocMeta ? activeDocMeta : "en-us"
  const validations = lang === "en-us" ? VALIDATION_EN : VALIDATION_ES
  const oneTrustAccepted = useOneTrust()

  const DSARFormSchema = Yup.object().shape({
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
    birthDate: Yup.date().required(validations.enterBday).typeError(validations.validBday),
    message: Yup.string().required(validations.provideMsg),
  });

  const [birthDayValue, setBirthDayValue] = useState("")
  const [segmentID, setSegmentID] = useState("")

  // show success fail modal functions
  const [userName, setUserName] = useState(false)
  const [modalBodyCopy, setModalBodyCopy] = useState("")
  const [showSuccessFailModal, setShowSuccessFailModal] = useState(false)


  const closeSuccessFailModal = () => {
    setShowSuccessFailModal(false)
  }

  const handleBirthDateChange = (e) => {

    const output = validateDobField(e)
    setBirthDayValue(output.join('').substr(0, 10))
  }


  useEffect(() => {

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
                inquiryTypeID: "",
                firstName: "",
                lastName: "",
                birthDate: "",
                message: "",
                batchNumber: "",
                usaStatesList: "",
                extraFieldsCheckbox: false,
                packageType: "",
                packageQuantity: "",
                flavorName: ""
              }
            }
            enableReinitialize
            validationSchema={DSARFormSchema}

            onSubmit={(values, { setSubmitting, resetForm }) => {
              let extraDetails = [];

              // Add segmentId to extraDetails[]
              extraDetails.push({ KeyName: 'segmentId', Value: segmentID });

              let data = {
                ApplicationID: 839,
                Email: values.email.trim(),
                InquiryTypeID: values.inquiryTypeID,
                FirstName: values.firstName.trim(),
                LastName: values.lastName.trim(),
                BirthDate: values.birthDate.trim(),
                Message: values.message.trim(),
                ExtraDetails: extraDetails
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
                })
                    .then(function (response) {
                      isSubmitBlocked = false


                      // Set data for success fail modal
                      setUserName(values.firstName.trim())
                      setModalBodyCopy(validations.messageYes)
                      setShowSuccessFailModal(true)
                      // Rest birthday
                      setBirthDayValue("")
                      // Reset form
                      resetForm()
                    })
                    .catch(function () {
                      isSubmitBlocked = false
                      // Set data for success fail modal
                      setUserName(values.firstName.trim())
                      setModalBodyCopy(validations.messageNo)
                      setShowSuccessFailModal(true)
                      // Rest birthday
                      setBirthDayValue("")
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
                            }}
                        >
                          <option value="">{validations.pleaseSelectTopic}</option>

                          <option value="100000023">
                            {validations.dontSellInfo}
                          </option>
                          <option value="100000024">
                            {validations.deleteMyPersonalInfo}
                          </option>
                          <option value="100000025">
                            {validations.accessMyPersonalInfo}
                          </option>
                          <option value="100000026">
                            {validations.correctMyPersonalInfo}
                          </option>
                          <option value="100000027" >
                            {validations.transferMyPersonalInfo}
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

                  {/*/!* Hidden Fields Component *!/*/}
                  <HiddenFields inquiryTypeID={ values.inquiryTypeID } lang={lang} validations={validations}/>

                  <div className="row">
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
                          placeholder={validations.birthDateDD}
                          onChange={handleBirthDateChange}
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


                    <div className={`col-12 form-group form-text-field form-btn-container d-flex justify-content-end`}>
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

export default DsarForm





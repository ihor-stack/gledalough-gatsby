// core
import React, { useState } from 'react'
import axios from 'axios'

// form validation
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"

//constants
import { SUBSCRIPTION_FORM } from "../constants/subscriptionFormLocation";
import { SUBSCRIPTION_SIGN_UP_BASE_URL } from "../constants/baseUrl";

//data-layer
import { setSubscriptionSignUpEvent } from "../assets/js/data-layer";
import { useOneTrust } from '../components/OneTrustContext'


const NewsLetterSignUp = ({ subscriptionFormTitle, subscriptionFormCopy, subscriptionFormName, ActiveCampaignTag }) => {
    const [showForm, setShowForm] = useState(true)
    const [failedMsg, setFailedMsg] = useState(false)
    const [birthDayValue, setBirthDayValue] = useState("")
    const oneTrustAccepted = useOneTrust()

    // birthDay Field Validation
    // consider improving checkValue() to limit min years
    const checkValue = (str, max) => {
        if (str.charAt(0) !== '0' || str === '00') {
            let num = parseInt(str)
            if (isNaN(num) || num <= 0 || num > max) num = 1
            str = num > parseInt(max.toString().charAt(0)) && num.toString().length === 1 ? '0' + num : num.toString()
        }
        return str
    }

    const checkYear = (str, max) => {
        if(str.length === 4) {
            return str > max || str.charAt(0) === "0" ? max : str;
        }
        return str;
    }

    const handleBirthDateChange = (e) => {
        let input = e.target.value
        if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3)
        let values = input.split('/').map(function(v) {
            return v.replace(/\D/g, '')
        })

        if (values[0]) values[0] = checkValue(values[0], 12)
        if (values[1]) values[1] = checkValue(values[1], 31)
        if (values[2]) values[2] = checkYear(values[2], new Date().getFullYear())
        let output = values.map(function(v, i) {
            return v.length === 2 && i < 2 ? v + '/' : v
        })
        setBirthDayValue(output.join('').substr(0, 10))
    }

    const checkLegalAge = (value) => {
        const bdayDate = new Date(value);
        const today = new Date();
        const age = Math.floor((today-bdayDate) / (365.25 * 24 * 60 * 60 * 1000));
        return age >= 21;
    }

    return (
        <>
        {(showForm) ?
        <>
        {/* Form */}
        <Formik

            initialValues={ // initial form values
                {
                    firstname: "",
                    lastname: "",
                    email: "",
                    birthdate: ""
                }
            }

            validationSchema={Yup.object({ // validate form
                firstname: Yup.string().required("This field is required."),
                lastname: Yup.string().required("This field is required."),
                email: Yup.string().email("Invalid email address").required("This field is required."),
                birthdate: Yup.date().required("Please enter your birthday.")
                    .test("birthdate", "Please provide a valid birthday MM/DD/YYYY", () => { return !(birthDayValue?.length < 10) })
                    .test("birthdate", "To subscribe, you must be of legal drinking age", (value) => {
                    return checkLegalAge(value);
                }),
            })}

            onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(false)

                var data = {
                    FirstName: values.firstname.trim(),
                    LastName: values.lastname.trim(),
                    Email: values.email.trim(),
                    birthdate: values.birthdate.trim(),
                    ListID: 38,
                    Key: 'rgkx5ee6zl',
                    // SegmentId: (typeof (analytics) !== "undefined") ? analytics.user().anonymousId() : ""
                    SegmentId: "",
                    Tag: ActiveCampaignTag
                }

                axios({
                    method: "POST",
                    url: SUBSCRIPTION_SIGN_UP_BASE_URL.PROD,
                    data: JSON.stringify(data),
                    cache: false,
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    }
                }).then(function (response) {
                    setSubscriptionSignUpEvent(subscriptionFormName, oneTrustAccepted)
                    // console.log('response  ', response)
                    // Update the form to Thank you message
                    setShowForm(false)

                }).catch(function () {
                    // handle error
                    // console.log("Newsletter subscription form submission has failed.")
                    setShowForm(false)
                    setFailedMsg(true)
                })

                // Reset form
                resetForm()
            }}
            >

            {({ values, errors, submitCount }) => {
                return (
                <div className={"subscription-form mx-auto " + (subscriptionFormName === SUBSCRIPTION_FORM.FOOTER ? 'subscription-form--footer' : '')}>

                    {(subscriptionFormName === SUBSCRIPTION_FORM.POP_UP)
                    ?
                    <>
                    <h1>{subscriptionFormTitle}</h1>
                    <p dangerouslySetInnerHTML={{ __html: subscriptionFormCopy }} />
                    </>
                    :
                    (subscriptionFormName === SUBSCRIPTION_FORM.FOOTER)
                    ?
                    <h1 className="subscription-form-title text-center text-bold">{subscriptionFormTitle}</h1>
                    :
                    <>
                    <h1 className="text-center mb-0">{subscriptionFormTitle}</h1>
                    <p className="text-center">{subscriptionFormCopy}</p>
                    </>
                    }


                    <div className={(subscriptionFormName === SUBSCRIPTION_FORM.POP_UP)
                        ? ""
                        : (subscriptionFormName === SUBSCRIPTION_FORM.FOOTER)
                        ? "newsletter-footer-form-wrapper"
                        : "_form_114 subscribe-form-wrapper"}
                    >

                        <Form className={(subscriptionFormName === SUBSCRIPTION_FORM.POP_UP)
                            ? "newsletter-form newsletter-popup-form"
                            : (subscriptionFormName === SUBSCRIPTION_FORM.FOOTER)
                            ? "newsletter-footer-form"
                            : "subscribe-form subscribe-page-form"}
                            autoComplete="off"
                        >

                            <div className="position-relative">

                                <Field type="text" name="firstname" className={"w-100 " + (subscriptionFormName === SUBSCRIPTION_FORM.SUBSCRIBE_PAGE
                                ? 'newsletter-input-subscribe'
                                : 'newsletter-input')}
                                id="firstname"
                                placeholder="First Name*"
                                />

                                {(submitCount > 0 && errors.firstname !== "") ?
                                <span className={"input-error " + (!errors.firstname ? 'd-none' : '')}>{errors.firstname}</span>
                                :
                                null
                                }

                            </div>
                            <div className="position-relative">

                                <Field type="text" name="lastname" className={"w-100 " + (subscriptionFormName === SUBSCRIPTION_FORM.SUBSCRIBE_PAGE
                                ? 'newsletter-input-subscribe'
                                : 'newsletter-input')}
                                id="lastname"
                                placeholder="Last Name*"
                                />

                                {(submitCount > 0 && errors.lastname !== "") ?
                                <span className={"input-error " + (!errors.lastname ? 'd-none' : '')}>{errors.lastname}</span>
                                :
                                null
                                }

                            </div>
                            <div className="position-relative">

                                <Field type="text" name="birthdate" className={"w-100 " + (subscriptionFormName === SUBSCRIPTION_FORM.SUBSCRIBE_PAGE
                                    ? 'newsletter-input-subscribe'
                                    : 'newsletter-input')}
                                       id="birthdate"
                                       placeholder="Date of Birth*"
                                       onChange={handleBirthDateChange}
                                       onFocus={(e)=> e.target.placeholder = 'MM/DD/YYYY'}
                                       onBlur={(e)=> e.target.placeholder = 'Date of Birth*'}
                                       value={(values.birthdate = birthDayValue)}
                                />

                                {(submitCount > 0 && errors.birthdate !== "") ?
                                    <span className={"input-error " + (!errors.birthdate ? 'd-none' : '')}>{errors.birthdate}</span>
                                    :
                                    null
                                }

                            </div>
                            <div className="position-relative">

                                <Field type="text" name="email" className={"w-100 " + (subscriptionFormName === SUBSCRIPTION_FORM.SUBSCRIBE_PAGE
                                ? 'newsletter-input-subscribe'
                                : 'newsletter-input')}
                                id="email"
                                placeholder="Email*"
                                />

                                {(submitCount > 0 && errors.email !== "") ?
                                <span className={"input-error " + (!errors.email ? 'd-none' : '')}>{errors.email}</span>
                                :
                                null
                                }

                            </div>
                            <input
                            className={(subscriptionFormName === SUBSCRIPTION_FORM.SUBSCRIBE_PAGE)
                            ? "newsletter-input-submit subscribe-page"
                            : "newsletter-input-submit"}
                            type="submit" value="SUBMIT"
                            />
                        </Form>
                    </div>
                </div>
                )
            }}

        </Formik>
        {/* Eof form */}

        </>
        :
        <>
        {(failedMsg)
        ?
            <>
            <div className="subscription-form text-center mx-auto">
                {(subscriptionFormName === SUBSCRIPTION_FORM.POP_UP)
                ?
                null
                :
                (subscriptionFormName === SUBSCRIPTION_FORM.FOOTER)
                ?
                <div id="subscription-form-title" className="subscription-form-title text-center text-bold">Subscribe to the Wave</div>
                :
                <div id="subscription-form-title" className="subscription-form-title subscription-page-form-title text-center text-bold">Subscribe to the Wave</div>
                }
                <div className="newsletter-footer-form-wrapper">
                    <div className="newsletter-footer-form">
                        {(subscriptionFormName === SUBSCRIPTION_FORM.POP_UP)
                        ?
                        <div className="text-white text-center thank-you">It seems that our server is not responding. <br /> Please try again later!</div>
                        :
                        (subscriptionFormName === SUBSCRIPTION_FORM.FOOTER)
                        ?
                        <div className="text-white text-center">It seems that our server is not responding. <br /> Please try again later!</div>
                        :
                        <div className="text-center">It seems that our server is not responding. <br /> Please try again later!</div>
                        }
                    </div>
                </div>
            </div>
            </>
        :
            <>
            <div className="subscription-form text-center mx-auto">
                {(subscriptionFormName === SUBSCRIPTION_FORM.POP_UP)
                ?
                null
                :
                (subscriptionFormName === SUBSCRIPTION_FORM.FOOTER)
                ?
                <div id="subscription-form-title" className="subscription-form-title text-center text-bold">Subscribe to the Wave</div>
                :
                <div id="subscription-form-title" className="subscription-form-title subscription-page-form-title text-center text-bold">Subscribe to the Wave</div>
                }
                <div className="newsletter-footer-form-wrapper">
                    <div className="newsletter-footer-form">
                        {(subscriptionFormName === SUBSCRIPTION_FORM.POP_UP)
                        ?
                        <div className="text-white text-center thank-you">Thanks for signing up for the Wave!</div>
                        :
                        (subscriptionFormName === SUBSCRIPTION_FORM.FOOTER)

                        ?
                        <div className="text-white text-center">Thanks for signing up for the Wave!</div>
                        :
                        <div className="text-center">Thanks for signing up for the Wave!</div>
                        }
                        {/*
                        <div className={"text-white text-center " + (subscriptionFormName === SUBSCRIPTION_FORM.POP_UP ? 'thank-you' : '')}>Thanks for signing up for the Wave!</div>
                        */}
                    </div>
                </div>
            </div>
            </>
        }
        </>
        }
        </>
    )
}

export default NewsLetterSignUp






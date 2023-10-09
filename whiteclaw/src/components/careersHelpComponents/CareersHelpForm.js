// core
import React, {useState, useRef, useEffect} from 'react'
import axios from 'axios'

// form validation
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

// captcha
import Recaptcha from "react-recaptcha"

// componets
import SuccessFailModal from "./SuccessFailModal"

// Resources
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const CareersHelpForm = ({activeDocMeta}) => {
    // show success fail modal functions
    let [userName, setUserName] = useState(false)
    let [modalBodyCopy, setModalBodyCopy] = useState("")
    const [showSuccessFailModal, setShowSuccessFailModal] = useState(false)
    const closeSuccessFailModal = () => setShowSuccessFailModal(false)
    const { lang } = activeDocMeta ? activeDocMeta : "en-us"

    const validationsEN = {
        firstName: "Please provide a first name.",
        lastName: "Please provide a last name.",
        tooShort: "Too Short!",
        tooLong: "Too Long!",
        onlyAlpha: "Only alphabetic characters are allowed.",
        phoneNumber: "Please provide a phone number.",
        email: "Please provide an email.",
        validEmail: "Please provide a valid email",
        message: "Please provide a message.",
        topic: "Please select a topic.",
        captcha: "Captcha is required.",
        msgYes: "Your message has been received <br> and we'll respond as soon as we can.",
        msgNo: "It seems that our mail server is not responding. <br> Please try again later!",
        firstNameField: "First Name*",
        lastNameField: "Last Name*",
        phoneField: "Phone Number*",
        emailField: "Email*",
        contactReason: "Reason for contact*",
        carNotLoad: "The careers site isn't loading",
        resume: "Unable to attach resume",
        login: "Login/Password",
        otherTech: "Other technical issue",
        formMessage: "Message*",
        submitBtn: "SUBMIT",
    }

    const validationsES = {
        firstName: "Por favor, proporciona un nombre",
        lastName: "Por favor, proporciona un apellido.",
        tooShort: "¡Demasiado corto!",
        tooLong: "¡Demasiado largo!",
        onlyAlpha: "Solo se permiten caracteres alfabéticos.",
        phoneNumber: "Proporcione un número de teléfono.",
        email: "Por favor, proporciona un correo electrónico válido",
        validEmail: "Por favor, proporciona un correo electrónico válido",
        message: "Por favor proporciona un mensaje.",
        topic: "Por favor, selecciona un tema.",
        captcha: "Se requiere captcha.",
        msgYes: "Hemos recibido tu mensaje <br>y te contestaremos en breve.",
        msgNo: "Parece que nuestro servidor de correo no responde. <br>Por favor, inténtalo de nuevo más tarde.",
        firstNameField: "Nombre*",
        lastNameField: "Apellido*",
        phoneField: "Número de teléfono*",
        emailField: "Correo electrónico*",
        contactReason: "Razón para contactar*",
        carNotLoad: "El sitio de empleos no carga",
        resume: "No se puede adjuntar currículum",
        login: "Inicio de sesión / Contraseña",
        otherTech: "Otro problema técnico",
        formMessage: "Mensaje*",
        submitBtn: "ENVIAR",
    }

    const validations = lang === "en-us" ? validationsEN : validationsES
    // const validations = validationsEN

    // console.log('used validations', validations)

    const CareersHelpFormSchema = Yup.object().shape({
        firstName: Yup.string()
            .required(validations.firstName)
            .min(2, validations.tooShort)
            .max(32, validations.tooLong)
            .matches(
                /^[a-zA-Z\s]+$/,
                validations.onlyAlpha
                ),
        lastName: Yup.string()
            .required(validations.lastName)
            .min(2, validations.tooShort)
            .max(32, validations.tooLong)
            .matches(
                /^[a-zA-Z\s]+$/,
                validations.onlyAlpha
                ),
        phoneNumber: Yup.string()
            .required(validations.phoneNumber)
            .matches(
                /^\d*[.]?\d*$/,
                validations.onlyAlpha
                ),
        email: Yup.string()
            .required(validations.email)
            .email(validations.validEmail),
        message: Yup.string()
            .required(validations.message),
        issueType: Yup.string()
            .required(validations.topic),
        recaptcha: Yup.string()
            .required(validations.captcha)
    })

    // reCaptcha elm reference
    const recaptchaRef = useRef(null)

    useEffect(()=>{
        // Google reCaptcha append script tag
        const script = document.createElement("script")
        script.src = "https://www.google.com/recaptcha/api.js"
        script.async = true
        script.defer = true
        document.body.appendChild(script)
    },[])

    return (
    <>
        {/* Form */}
        <Formik
            initialValues={ // initial form values
                {
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    issueType: "",
                    message: "",
                    recaptcha: "",
                }
            }

            validationSchema={CareersHelpFormSchema}

            onSubmit={(values, { setSubmitting, resetForm }) => {

                let data = {
                    ApplicationID: 839,
                    FirstName: values.firstName.trim(),
                    LastName: values.lastName.trim(),
                    Email: values.email.trim(),
                    Phone: values.phoneNumber.trim(),
                    IssueType: values.issueType,
                    Message: values.message.trim(),
                }

                axios({
                    method: "POST",
                    // PROD
                    url: "https://api.markanthony.com/ConsumerResponses/CareersContact",
                    // DEV
                    // url: "https://consumerresponses-api-dev.markanthony.com/CareersContact",
                    // LOCAL
                    // url: "http://localhost:56432/CareersContact",
                    data: JSON.stringify(data),
                    cache: false,
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    }
                }).then(function (response) {
                    // console.log('response  ', response)
                    // Set data for success fail modal
                    setUserName(values.firstName.trim())
                    setModalBodyCopy(validations.msgYes)
                    setShowSuccessFailModal(true)
                    // Reset reCaptcha and form
                    recaptchaRef.current.reset()
                    resetForm()
                }).catch(function () {
                    // Set data for success fail modal
                    setUserName(values.firstName.trim())
                    setModalBodyCopy(validations.msgNo)
                    setShowSuccessFailModal(true)
                    // Reset reCaptcha and form
                    recaptchaRef.current.reset()
                    resetForm()
                })

                setSubmitting(false)
            }}
            >

            {({ errors, touched, submitCount, setFieldValue }) => {
                return (
                <Form id="frm-contact-form" autoComplete="off">

                    <div className="row">
                        <div className="col-md-4 form-group">
                            {/* First Name */}
                            <Field type="text" id="form-firstname" className="form-control" name="firstName" placeholder={validations.firstNameField} />

                            {(submitCount > 0 && errors.firstName !== "") ?
                            <>
                            <div className="help-block with-errors">
                                <ul role="alert" className="list-unstyled">
                                    <li>{errors.firstName}</li>
                                </ul>
                            </div>
                            </>
                            :
                            null
                            }
                        </div>

                        <div className="col-md-4 form-group">
                            {/* Last Name */}
                            <Field type="text" id="form-lastname" className="form-control" name="lastName" placeholder={validations.lastNameField} />

                            {(submitCount > 0 && errors.lastName !== "") ?
                            <>
                            <div className="help-block with-errors">
                                <ul role="alert" className="list-unstyled">
                                    <li>{errors.lastName}</li>
                                </ul>
                            </div>
                            </>
                            :
                            null
                            }
                        </div>

                        <div className="col-md-4 form-group">
                            {/* Phone Number */}
                            <Field type="text" id="form-phonenumber" className="form-control" name="phoneNumber" placeholder={validations.phoneField} />

                            {(submitCount > 0 && errors.phoneNumber !== "") ?
                            <>
                            <div className="help-block with-errors">
                                <ul role="alert" className="list-unstyled">
                                    <li>{errors.phoneNumber}</li>
                                </ul>
                            </div>
                            </>
                            :
                            null
                            }
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 form-group control-group">
                            {/* Email */}
                            <Field type="email" id="form-email" className="form-control" name="email" placeholder={validations.emailField} />

                            {(submitCount > 0 && errors.email !== "") ?
                            <>
                            <div className="help-block with-errors">
                                <ul role="alert" className="list-unstyled">
                                    <li>{errors.email}</li>
                                </ul>
                            </div>
                            </>
                            :
                            null
                            }
                        </div>

                        <div className="col-md-6 form-group">
                            <label className='select'>
                                {/* Inquiry Type */}
                                <Field as="select" className="form-control" name="issueType">
                                    <option value="">{validations.contactReason}</option>
                                    <option value={validations.carNotLoad}>{validations.carNotLoad}</option>
                                    <option value={validations.resume}>{validations.resume}</option>
                                    <option value={validations.login}>{validations.login}</option>
                                    <option value={validations.otherTech}>{validations.otherTech}</option>
                                </Field>
                                <FontAwesomeIcon icon={faChevronDown} className="fa-solid"/>
                                {(submitCount > 0 && errors.issueType !== "") ?
                                <>
                                <div className="help-block with-errors">
                                    <ul role="alert" className="list-unstyled">
                                        <li>{errors.issueType}</li>
                                    </ul>
                                </div>
                                </>
                                :
                                null
                                }
                            </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 form-group form-text-field">
                            {/* Message */}
                            <Field as="textarea" id="form-message" className="form-control" name="message" rows="5" type="text" placeholder={validations.formMessage} />

                            {(submitCount > 0 && errors.message !== "") ?
                            <>
                            <div className="help-block with-errors">
                                <ul role="alert" className="list-unstyled">
                                    <li>{errors.message}</li>
                                </ul>
                            </div>
                            </>
                            :
                            null
                            }
                        </div>

                        <div className="col-12 col-md-7 form-group d-sm-flex flex-sm-wrap flex-sm-column justify-content-sm-start">
                            {/* ReCAPTCHA component */}
                            <Recaptcha
                            sitekey="6LcrHYkUAAAAADnbFw5uyQ-cpkcazIk0Bnkq7lcr"
                            render="explicit"
                            theme="light"
                            ref={recaptchaRef}
                            verifyCallback={(response) => {
                                setFieldValue("recaptcha", response)
                            }}
                            onloadCallback={() => {
                                // console.log("captcha is done loading!")
                            }}
                            />

                            {errors.recaptcha && touched.recaptcha && (
                                <div className="help-block with-errors">
                                    <ul role="alert" className="list-unstyled">
                                        <li>{errors.recaptcha}</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="col-12 col-md-5 form-group form-text-field form-btn-container d-flex flex-wrap justify-content-end">
                            {/* Submit Btn */}
                            <button className="form-btn" type="submit" id="submit-contact-form">{validations.submitBtn}</button>
                        </div>
                    </div>
                    {/* Success Fail Component */}
                    <SuccessFailModal
                    showSuccessFailModal={showSuccessFailModal}
                    closeSuccessFailModal={closeSuccessFailModal}
                    userName={userName}
                    modalBodyCopy={modalBodyCopy}
                    activeLang={lang}
                    />
                </Form>
                )
            }}
        </Formik>
        {/* Eof form */}
    </>
    )
}

export default CareersHelpForm






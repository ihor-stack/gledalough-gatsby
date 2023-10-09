// core
import React, { useState } from 'react'
import { Link } from 'gatsby'

// components
import WindowModal from './WindowModal'

const HiddenFields = ({ inquiryTypeID, lang, validations }) => {
    const [showWindowModal, setShowWindowModal] = useState(false)
    const [windowModalType, setWindowModalType] = useState("")

    // Window Modal Func
    const closeWindowModal = () => setShowWindowModal(false)
    const openWindowModal = (e, windowModalType) => {
        e.preventDefault()
        setWindowModalType(windowModalType)
        setShowWindowModal(true)
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="row">

                        <div className={"hidden-block form-section-info " + (inquiryTypeID === '100000006' ? '' : 'toggle-hide')}>
                            <div className="col-12">
                                <p>
                                    {validations.rebateTxt01} <Link to={`mailto:InmarRebateCenter@inmar.com?subject=Rebate`} target="_blank" title="InmarRebateCenter@inmar.com">InmarRebateCenter@inmar.com</Link>.
                                </p>

                                <p>
                                    {validations.rebateTxt02} <Link to={`https://www.inmarrebates.com`} target="_blank" title="www.inmarrebates.com">www.inmarrebates.com</Link>.
                                </p>
                                <p>
                                   {validations.rebateTxt03_A} <Link to={`https://home.ibotta.com/`} target="_blank" title="Ibotta">Ibotta</Link>, {validations.rebateTxt03_B}
                                </p>
                            </div>
                        </div>

                        <div className={"hidden-block form-section-info " + (inquiryTypeID === '100000012' ? '' : 'toggle-hide')}>
                            <div className="col-12">
                                <p>
                                    {validations.cantFindTxt01_A} <Link to={`https://locator.whiteclaw.com/?ag=false`} target="_blank" title="{validations.cantFindLocatorUrlTxt}">{validations.cantFindLocatorUrlTxt}</Link> {validations.cantFindTxt01_B}
                                </p>
                            </div>
                        </div>

                        <div className={"hidden-block form-section-info " + (inquiryTypeID === '100000002' ? '' : 'toggle-hide')}>
                            <div className="col-12">
                                <p>
                                    {validations.nutritionTxt01_A} <Link to={`https://ussupport.whiteclaw.com/en/support/home`} target="_blank" title="FAQ">{validations.nutritionFaqUrlTxt}</Link> {validations.nutritionTxt01_B}
                                </p>
                            </div>
                        </div>

                        <div className={"hidden-block form-section-info " + (inquiryTypeID === '100000005' ? '' : 'toggle-hide')}>
                            <div className="col-12">
                                <h3>{validations.sponsorTxt01}</h3>
                                <p>{validations.sponsorTxt02}</p>
                            </div>
                        </div>

                        <div className={"hidden-block form-section-info " + (inquiryTypeID === '100000007' ? '' : 'toggle-hide')}>
                            <div className="col-12">
                                <h3>{validations.partnerTxt01}</h3>
                                <p>{validations.partnerTxt02}</p>
                            </div>
                        </div>

                        <div className={"hidden-block form-section-info " + (inquiryTypeID === '100000008' ? '' : 'toggle-hide')}>
                            <div className="col-12 form-btn-container">
                                <p>
                                    {validations.expirationTxt01}
                                    &nbsp;
                                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                                    <a href="#" onClick={(e) => openWindowModal(e, 'batchimage')}>
                                    {validations.viewImage}
                                    </a>.
                                </p>
                                <p>
                                    {validations.expirationTxt02}
                                </p>
                                <p className="form-btn-container">
                                    <button type="button" className="form-btn form-btn-long-text" onClick={(e) => openWindowModal(e, 'decipherbatchnumber')}>{validations.decipherBatch}</button>
                                </p>
                            </div>

                            {/* WindowModal Component Batch / Decipher */}
                            <WindowModal
                            showWindowModal={showWindowModal}
                            closeWindowModal={closeWindowModal}
                            windowModalType={windowModalType}
                            lang={lang}
                            />
                        </div>

                        <div className={"hidden-block form-section-info " + (inquiryTypeID === '100000013' ? '' : 'toggle-hide')}>
                            <div className="col-12">
                                <h4>
                                    IF YOU WOULD LIKE TO EXERCISE OTHER RIGHTS PROVIDED BY THE CCPA, SUCH AS THE RIGHT TO ACCESS OR DELETE YOUR PERSONAL INFORMATION, YOU OR AN AUTHORIZED REPRESENTATIVE MAY EMAIL US AT <Link to={`mailto:consumerprivacy@markanthony.com?subject=Consumer%20Privacy`} target="_blank" title="CONSUMERPRIVACY@MARKANTHONY.COM">CONSUMERPRIVACY@MARKANTHONY.COM</Link> OR USE THE CONTACT FORM BELOW INDICATING ACCESS OR DELETE.
                                </h4>
                            </div>
                        </div>

                        {/* Do Not Sell or Share My Personal Information  */}
                        <div className={"hidden-block form-section-info " + (inquiryTypeID === '100000023' ? '' : 'toggle-hide')}>
                            <div className="col-12">
                                <h4>
                                    Certain state laws allow you to make a request related to the personal information that we have collected about you.
                                    You have the option to opt out of sale and sharing of your personal information, as required by applicable state laws.
                                    The information provided below will help us process your request. If you do not provide the information requested below,
                                    we may not be able to identify you and process your request to opt-out.  You request to opt-out of sale/sharing is browser
                                    and device specific.
                                    <br/>
                                    For more information about our privacy practices, please review our <a href='/privacy' target='_blank'>Privacy Policy</a>.
                                </h4>
                            </div>
                        </div>

                        {/* Delete My Personal Information */}
                        <div className={"hidden-block form-section-info " + (inquiryTypeID === '100000024' ? '' : 'toggle-hide')}>
                            <div className="col-12">
                                <h4>Subject to certain exceptions, you have the right to request that we delete any of your personal information. Once we receive your request and confirm your identity, we will review your request to see if an exception under applicable law allowing us to retain the information applies. We will delete or deidentify personal information not subject to one of these exceptions from our records. We do not discriminate against individuals who exercise their rights. Please know that deletion of your personal information may result in  less personalized experience as well as less communications with Mark Anthony.</h4>
                            </div>
                        </div>

                        {/* Access My Personal Information */}
                        <div className={"hidden-block form-section-info " + (inquiryTypeID === '100000025' ? '' : 'toggle-hide')}>
                            <div className="col-12">
                                <h4>
                                    Request the specific pieces of Personal Information that we have collected about you for the last 12 months.
                                    To protect our customers’ personal information, we are required to verify your identify before we can act on your request.
                                </h4>
                            </div>
                        </div>

                        {/* Correct My Personal Information */}
                        <div className={"hidden-block form-section-info " + (inquiryTypeID === '100000026' ? '' : 'toggle-hide')}>
                            <div className="col-12">
                                <h4>
                                    Request the specific pieces of Personal Information that should be corrected.
                                    Data types to change include: First Name, Last Name, Mobile Phone Number, Date of Birth, Primary Email Address,
                                    Primary Mailing Address.
                                    Subject to certain exceptions, you have the right to request that we correct inaccurate personal information that we have collected about you.
                                    We may also request additional information showing that the information you want to correct is inaccurate
                                </h4>
                            </div>
                        </div>

                        {/* Transfer My Personal Information */}
                        <div className={"hidden-block form-section-info " + (inquiryTypeID === '100000027' ? '' : 'toggle-hide')}>
                            <div className="col-12">
                                <h4>
                                    Request to produce your Personal Information in a structured, commonly used, exportable format that may be transferred to another business.
                                </h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HiddenFields
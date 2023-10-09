import React, { useState } from 'react'

// components
import CountrySelector from './CountrySelector'
import ImgWithFallback from './ImgWithFallback'

// assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import globe from '../assets/images/icons/globe.svg'
import globeWhite from '../assets/images/icons/globe-white.svg'
import whiteclawLogoSrc from '../assets/images/logo-blk.webp';
import whiteclawLogoFallbackSrc from '../assets/images/logo-blk.png';

const AgeGate = ({setAgeValid , activeDocMeta}) => {
    const { lang } = activeDocMeta ? activeDocMeta : { lang: "en-us" }
    const [minorMsg, setMinorMsg] = useState(false)
    const ageGateContent = []

    // country select functions
    const [showCountrySelector, setShowCountrySelector] = useState(false)
    const closeCountrySelector = () => setShowCountrySelector(false)
    const openCountrySelector = () => setShowCountrySelector(true)

    if(!minorMsg) { // age gate
        ageGateContent.push(
            <div key="1" className="container-fluid px-0">
                <div className="row w-lg-80 mx-auto">
                    <div className="col-12 bg-black text-center py-3 px-3 py-lg-4 px-lg-4">
                        <h1 className="my-2">{lang === "en-us" ? 'ARE YOU OVER 21?' : '¿TIENES 21 AÑOS O MÁS?'}</h1>
                    </div>
                </div>
                <div className="row w-lg-80 mx-auto age-gate-btns">
                    <div className="col-6 text-center age-gate-yes-container px-0">
                        <button
                        className="btn d-block w-100 py-3 px-3 py-lg-4 px-lg-4 font-weight-bold age-gate-yes"
                        data-agegate="yes"
                        onClick={setAgeValid}
                        >
                        {lang === "en-us" ? 'Yes' : 'Sí'}
                        </button>
                    </div>
                    <div className="col-6 text-center age-gate-no-container px-0">
                        <button
                        className="btn d-block w-100 py-3 px-3 py-lg-4 px-lg-4 font-weight-bold age-gate-no"
                        data-agegate="no"
                        onClick={() => setMinorMsg(!minorMsg)}
                        >
                        {lang === "en-us" ? 'No' : 'No'}
                        </button>
                    </div>
                </div>
            </div>
        )
    } else { // minor entered
        ageGateContent.push(
            <div key="2" className="container-fluid px-0">
                <div className="row w-lg-80 mx-auto">
                    <div className="col-12 bg-black text-center py-3 px-3 py-lg-4 px-lg-4">
                        {lang === "en-us" ?
                        <h1 className="my-2 age-limit">Please come back and visit us <br className="d-none d-md-block d-lg-none" />when you're 21.</h1>
                        :
                        <h1 className="my-2 age-limit">Lo sentimos, debes tener 21+ años para entrar.</h1>
                        }
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="modal modal-age-gate d-block">
            <div className="d-flex flex-wrap align-items-center h-100">
                <div className='container age-gate-wrapper text-center bg-white'>
                    <div className='age-gate d-flex flex-wrap justify-content-center align-items-center'>
                        <div className="row position-relative justify-content-center w-100">
                            <div>
                                <ImgWithFallback
                                    classNamePicture={"align-self-center mx-auto d-block img-fluid my-4 my-lg-5"}
                                    classNameImg={"age-gate-logo"}
                                    src={whiteclawLogoSrc}
                                    fallbackSrc={whiteclawLogoFallbackSrc}
                                    alt="White Claw Logo"
                                />
                            </div>
                            <button className="position-absolute country-selector" onClick={openCountrySelector} onKeyDown={openCountrySelector}>
                                <img src={globeWhite} className="globe-white" alt="Globe Icon" />
                                <img src={globe} className="globe-black" alt="Globe Icon" />
                            </button>
                        </div>

                        {/* AGE GATE DYNAMIC CONTENT */}
                        {ageGateContent}

                        <div className="region-select us">
                            <h4>
                                <img src={globe} alt="Globe Icon"/> Country / Language
                            </h4>

                            <button type='button'
                                    className="region-selected d-flex justify-content-center align-items-center"
                                    onClick={openCountrySelector}
                                    onKeyDown={openCountrySelector}
                            >
                                <div className="region-selected__flag"></div>
                                <div className="region-selected__country">
                                    {lang === "en-us" ?
                                        <span className="country-name">UNITED STATES</span>
                                        :
                                        <span className="country-name">ESTADOS UNIDOS</span>
                                    }
                                    <br/>
                                    <span className="country-lang">{lang === "en-us" ? "English" : "Español"}</span>
                                </div>

                                <FontAwesomeIcon icon={faChevronRight} className="fa-solid"/>
                            </button>
                        </div>
                        {lang === "en-us" ?
                            <div className="row d-flex justify-content-center age-gate-terms py-2">
                            Please Drink Responsibly. All Registered Trademarks, used under license by White Claw Seltzer Works, Chicago, IL
                            </div>
                            :
                            <div className="row d-flex justify-content-center age-gate-terms py-2">
                            Por favor bebe responsablemente. Todas las marcas registradas, son utilizadas bajo licencia por White Claw Seltzer Works, Chicago, IL,
                            </div>
                        }
                    </div>
                </div>
            </div>
            <CountrySelector showCountrySelector={showCountrySelector} closeCountrySelector={closeCountrySelector} activeDocMeta={lang} />
        </div>
    )
}

export default AgeGate
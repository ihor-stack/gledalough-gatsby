import * as React from 'react'

const CommonPageBanner = ({ title, backgroundUrl, subtitle, description }) => {
    return (
        <>
        <div className="container-fluid inside-hero" style={{ backgroundImage: `url(${backgroundUrl})` }}>
            <div className="overlay"></div>
        </div>
        </>
    )
}

export default CommonPageBanner



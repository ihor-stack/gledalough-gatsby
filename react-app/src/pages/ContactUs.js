import React from "react"
import PageScroll from "../components/PageScroll"
import MapPanel from "../components/MapPanel"
import Footer from "../components/Footer"

const ContactUs = () => {
  return (
    <>
      <PageScroll width="100vw" height="100vh">
        <MapPanel className="page" />
        <Footer />
      </PageScroll>
    </>
  )
}

export default ContactUs

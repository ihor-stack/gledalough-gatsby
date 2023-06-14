import React, { useState } from 'react';
// import PageScroll from 'react-page-scroll';
import PageScroll from '../components/PageScroll';
import NavComponent from '../components/NavComponent';
import MapPanel from '../components/MapPanel';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageClass = `contact-page-${currentPage}`;

  return (
    <>
      <NavComponent pageClass={pageClass} />
      <PageScroll width="100vw" height="100vh" onScrollStart={({ targetIndex }) => setCurrentPage(targetIndex)}>
        <MapPanel className='page' />
        <Footer className='page' />
      </PageScroll>
    </>
  )
};

export default ContactUs;

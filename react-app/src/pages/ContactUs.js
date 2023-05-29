import React, { useState }  from 'react';
import PageScroll from 'react-page-scroll';
import NavPanel  from '../components/NavPanel';
import MapPanel from '../components/MapPanel';
import Footer  from '../components/Footer';

const ContactUs = () =>{
  const [currentPage, setCurrentPage] = useState(0);
  
  return (
  <>
  <NavPanel currentPage={`contact-page-${currentPage}`} />
    <PageScroll width="100vw" height="100vh" onScrollStart={({ targetIndex }) => setCurrentPage(targetIndex)}>
      <MapPanel className='page' />
      <Footer className='page' />
    </PageScroll>
  </>
)};

export default ContactUs;
 
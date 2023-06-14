import React from 'react';
import { useLocation } from 'react-router-dom';
import NavComponent from '../components/NavComponent';
import HeroVideo from '../components/HeroVideo';

const NotFound = () => {
  const location = useLocation();
  const pageClass = `home-page-0`;

  return (
    <>
      <NavComponent pageClass={pageClass} />
      <HeroVideo className='page' page='notfound' heading={`${location.pathname} = 404`} title='Not Found' />
    </>
  )
};

export default NotFound;
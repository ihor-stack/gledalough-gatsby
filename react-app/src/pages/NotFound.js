import React from 'react';
import { useLocation } from 'react-router-dom';
import NavPanel from '../components/NavPanel';
import HeroVideo from '../components/HeroVideo';

const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <NavPanel currentPage={`home-page-0`} />
      <HeroVideo className='page' page='notfound' heading={`${location.pathname} = 404`} title='Not Found' />
    </>
)};

export default NotFound;
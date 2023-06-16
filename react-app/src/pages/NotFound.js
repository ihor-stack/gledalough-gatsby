import React from 'react';
import { useLocation } from 'react-router-dom';
import HeroVideo from '../components/HeroVideo';

const NotFound = () => {
  const location = useLocation();
  return (
    <>
      <HeroVideo className='page' page='notfound' heading={`${location.pathname} = 404`} title='Not Found' />
    </>
  )
};

export default NotFound;
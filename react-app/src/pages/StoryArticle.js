import React from 'react';
// import PageScroll from 'react-page-scroll';
import PageScroll from '../components/PageScroll';
import StoryPrimary from '../components/StoryPrimary';
import StorySecondary from '../components/StorySecondary';
import Footer from '../components/Footer';

import { CONTENT } from '../constants';
// import { gins as productItems } from '../constants/menu_items';
// import { slider_items} from '../constants/menu_items'; // features as menuItems, 
// import useLatestData from '../utils/useLatestData'; // use when API is available

const Story = () => {
  // const { homeContent } = useLatestData(); // use when API is available 

  return (
    <>
      <PageScroll width="100vw" height="100vh">
        <StoryPrimary className='page' bgColor='cream' content={CONTENT.stories} />
        <StorySecondary className='page' bgColor='beige' index={1} reverse={true} content={CONTENT.stories} />
        <StorySecondary className='page' bgColor='cream' index={2} content={CONTENT.stories} />
        <StorySecondary className='page' bgColor='offwhite' index={3} reverse={true} content={CONTENT.stories} />
        <Footer className='page' />
      </PageScroll>
    </>
  )
};

export default Story; 
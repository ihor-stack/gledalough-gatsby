import React, { useState }  from 'react';
//import PageScroll from 'react-page-scroll';
import PageScroll from '../components/PageScroll';
import Hero from '../components/Hero';
import HeroVideo from '../components/HeroVideo';
import StoryPanel from '../components/StoryPanel';
import NavPanel  from '../components/NavPanel';
import NavMobile  from '../components/NavMobile';
import Footer  from '../components/Footer';
import { CONTENT } from '../constants';
import img_story_1 from '../assets/story_1.jpg';
import img_story_4 from '../assets/story_4.jpg';

const OurStory = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
    <NavPanel currentPage={`stories-page-${currentPage}`} />
    <NavMobile currentPage={`stories-page-${currentPage}`} />
      <PageScroll width="100vw" height="100vh" onScrollStart={({ targetIndex }) => setCurrentPage(targetIndex)}>
        <HeroVideo className='page' page='our_story' title='Our Story' />
        <Hero className='page' bgColor='cream' title={CONTENT.home_intro} />
        <StoryPanel className='page' panelLeft={CONTENT.story1} panelRight={CONTENT.story2} imgLeft={img_story_1} />
        <StoryPanel className='page' panelLeft={CONTENT.story3} panelRight={CONTENT.story4} imgRight={img_story_4} />
        <Footer className='page' />
      </PageScroll>
    </>
)};

export default OurStory; 
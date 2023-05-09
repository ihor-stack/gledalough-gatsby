import React, { Component } from 'react';
import HeroVideo from '../components/HeroVideo';
import StoryPanel from '../components/StoryPanel';
import NewsPanel from '../components/NewsPanel';

class OurStory extends Component {
  render() {
    return (
      <>
        <h1>Our Story</h1>
        <hr />
        <HeroVideo title="Our Story" />
        <StoryPanel title="Story one" />
        <StoryPanel title="Story two" />
        <StoryPanel title="Story three" />
        <StoryPanel title="Story four" />
        <hr />
        <NewsPanel />
      </>
    );
  }
}

export default OurStory;

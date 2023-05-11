import React from 'react';
import PageScroll from 'react-page-scroll';


const Fullpage = () => (
  <PageScroll width="100vw" height="100vh">
        <div id="page1" className='page'><h1>ONE</h1></div>
        <div id="page2" className='page'><h1>TWO</h1></div>
        <div id="page3" className='page'><h1>THREE</h1></div>
  </PageScroll>
);

export default Fullpage;

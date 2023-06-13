import React from 'react';

const PageScroll = ({ className, children }) => (
    <div className={`page-scroll ${className}`}>
      {children}
    </div>
);

export default PageScroll;
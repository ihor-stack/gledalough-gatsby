import React from "react";
import { Link } from 'gatsby';

const isInternalLink = (url) => {
  // Implement your logic to determine if the link is internal
  // For example, you can check if the URL starts with your site's domain
  const internalRegex = /^\/(?!\/)/; // Matches URLs starting with a single slash
  return internalRegex.test(url);
};

const CustomLink = ({ to, children, title, onClick, className, isNewWindow, ...rest }) => {
  if (isInternalLink(to)) {
    // Internal link
    return (
        <Link
          to={to}
          title={title}
          className={className}
          onClick={  (e) => {
            if (isNewWindow) {
              e.preventDefault()
              window.open(to, '_blank')
            }

            if(onClick) { onClick(e) }
          }}
          {...rest}
        >
          { children }
        </Link>
    )
  } else {
    // External link
    return (
        <a href={to}
           title={title}
           className={className}
           target="_blank"
           rel="noopener noreferrer"
           onClick={onClick}
           {...rest}
        >
          { children }
        </a>
    )
  }
};


export default CustomLink


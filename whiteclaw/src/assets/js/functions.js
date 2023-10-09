import { useState, useEffect } from 'react'

const convertString = (string) => {
  if(string === undefined) {
    return
  }
  const words = string.split('_');
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  const convertedString = capitalizedWords.join(' ');
  return convertedString;
};

export const useIntersection = (element, rootMargin) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, { rootMargin }
        );

        element.current && observer.observe(element.current);

        return () => observer.unobserve(element.current);
    }, []);

    return isVisible;
};

export const dataTrack = (eventName, dataObject, type, otAccepted) => {
	window.dataLayer = window.dataLayer || []
	window.dataLayer.push({
		'event': eventName,
			...dataObject
	})

  if(otAccepted) {
    if(type === 'page') {
      window.analytics.page({...dataObject})
    } else {
      window.analytics.track(convertString(eventName), dataObject ? {...dataObject} : undefined)
    }
  }
}
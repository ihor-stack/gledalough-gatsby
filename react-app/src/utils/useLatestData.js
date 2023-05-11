import { useState, useEffect } from 'react';
import { apiEndpoint } from '../constants';

export default function useLatestData() {

  const [homeContent, setHomeContent] = useState();
  
  useEffect(function () {
    // fetch data when the component loads.
    fetch(`${apiEndpoint}/data`, {
      method: 'POST',
      mode:'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: {}, // testing for now
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // TODO: check for errors
        // set the data to state
        setHomeContent(res);
        console.log('DEBUG: useLatestData()');
        console.log(res);
      })
      .catch((err) => {
        console.log('ERROR: useLatestData() Failed.');
        console.log(err);
      });
  }, []);
  return {
    homeContent
  };
}

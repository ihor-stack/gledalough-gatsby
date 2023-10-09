import { useState, useEffect } from "react";

// Hook
function useOneTrustCheck() {
  const [checkActiveGroup, setCheckActiveGroup] = useState('')
  const [oneTrustAccepted, setOneTrustAccepted] = useState(false)
  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    // console.log('onetrust hook useEffect run ')
    const setOneTrust = () => {
      if(isBrowser && window.OnetrustActiveGroups) {
        setCheckActiveGroup(window.OnetrustActiveGroups)
        // console.log('checkActiveGroup', checkActiveGroup)
      }
    }

    const checkAccepted = () => {
      if (isBrowser && checkActiveGroup.includes('C0004')) {
        setOneTrustAccepted(true)
      } else {
        setOneTrustAccepted(false)
      }
      // console.log('oneTrustAccepted', oneTrustAccepted)
    }
    
    const setAndCheckOT = () => {
      setOneTrust()
      checkAccepted()
    }

    setAndCheckOT()

    if (isBrowser) {
      window.addEventListener("consent.onetrust", setAndCheckOT)
    }

    return () => {
      window.removeEventListener("consent.onetrust", setAndCheckOT)
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oneTrustAccepted, checkActiveGroup]);
  // }, []);
  // console.log('===================================================')
  return oneTrustAccepted;
  // return true;
}

export default useOneTrustCheck
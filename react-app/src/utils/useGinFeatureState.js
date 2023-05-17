import { useState } from "react";

const useGinFeatureState = () => {
  const [feature, setFeature] = useState(0);

  const loadFeature = (index) => {
    setFeature(index);
  };

  return {
    feature,
    loadFeature,
  };
};

export default useGinFeatureState;

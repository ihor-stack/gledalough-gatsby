// core
import * as React from 'react'

import { ProductLocator } from "../product-locator/ProductLocator";

export const ProductLocatorNewProduct = ({ slice }) => {

  return (
      <>
      <div className='row mx-0'>
        <div className='product-locator-container col-12'>
          <ProductLocator slice={slice}/>
        </div>
      </div>
      </>
  );
};
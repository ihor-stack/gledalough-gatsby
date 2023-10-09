// core
import React from "react";

// components
import CustomLink from "../../components/CustomLink";

// data-layer
import { setProductFlavorClickedEvent } from "../../assets/js/data-layer";
import { useOneTrust } from '../../components/OneTrustContext'

export const AllFlavors = ({ slice }) => {
  const data = slice.primary;
  const items = slice.items;
  const oneTrustAccepted = useOneTrust()

  // console.log('all flav items', slice)

  return (
    <>
    <div className="product-all-flavors">
      <h2 className="product-all-flavors__header">{data.header}</h2>
      <div className="product-all-flavors__list">
          {items.map((element, index) => {
            const size = element.item_link.document.data.taxonomy_product_size
            const flavor = element.item_link.document.data.taxonomy_product_flavor

          return (
              <CustomLink
                  key={index}
                  to={element.item_link.document.url}
                  className="product-all-flavors__item"
                  onClick={()=>{
                    const dl = {
                      flavor,
                      category: element.item_link.document.data.product_category.document.data?.category_name.toLowerCase() || '',
                      position: index + 1,
                      url: element.item_link.document.url,
                      location: 'product details page',
                      size
                    }
                    setProductFlavorClickedEvent(dl, oneTrustAccepted)
                  }}
              >
                <img className="product-all-flavors__item-image" src={element.item_link.document.data.product_image_png.url} alt={element.item_link.document.data.product_image_png.alt ? element.item_link.document.data.product_image_png.alt : element.item_link.document.data.product_name.text} />
                <span className="product-all-flavors__item-name">{element.item_link.document.data.product_name.text}</span>
                <span className="product-all-flavors__item-tag">{
                  element.item_link.document.data.product_category.document.data.category_new_text
                  ? element.item_link.document.data.product_category.document.data.category_new_text
                  : element.item_link.document.data.product_new_text
                  ? element.item_link.document.data.product_new_text
                  : null
                  }</span>
              </CustomLink>
          );
          })}
      </div>
    </div>
    </>
  );
};

// core
import React from "react";

// components
import CustomLink from "../../components/CustomLink";

// data-layer
import { setProductFlavorClickedEvent } from "../../assets/js/data-layer";
import { useOneTrust } from '../../components/OneTrustContext'

export const FeaturedProducts = ({ slice }) => {
  const data = slice.primary;
  const items = slice.items;
  const oneTrustAccepted = useOneTrust()
  const bgImageUrl = {
    screen : data?.background_image?.url || ''
  }

  // console.log('feature products slice data', slice)

  return (
      <section className='featured-products__section' style={{backgroundImage: `url(${bgImageUrl.screen})`}}>
        <h2 className="featured-products__header">{data.header}</h2>
        <div className="featured-products">
          <div className="featured-products__list">
            {data.product_category.document ?
                data.product_category.document.data.category_item.map((element, index) => { // eslint-disable-line array-callback-return
                  const itemType = element.category_item_link.document.data.product_type;
                  const flavor = element.category_item_link.document.data.taxonomy_product_flavor
                  const size = element.category_item_link.document.data.taxonomy_product_size
                  const category = data.product_category.document.data.category_name.toLowerCase() || ''
                  if (itemType !== "Pack") {
                    return (
                        <CustomLink
                            key={index}
                            to={element.category_item_link.document.url}
                            className="featured-products__item"
                            onClick={() => {
                              // data-layer
                              const dl = {
                                flavor,
                                category,
                                position: index + 1,
                                url: element.category_item_link.document.url,
                                location: 'explore more section',
                                size
                              }
                              setProductFlavorClickedEvent(dl, oneTrustAccepted)
                            }}
                        >
                          <img
                              className="featured-products__item-image"
                              src={element.category_item_link.document.data.product_image_png.url}
                              alt={
                                element.category_item_link.document.data.product_image_png.alt
                                    ? element.category_item_link.document.data.product_image_png.alt
                                    : element.category_item_link.document.data.product_name
                              }
                          />
                          <span className="featured-products__item-name">{element.category_item_link.document.data.product_name.text}</span>
                          <span className="featured-products__item-tag">{
                            data.product_category.document.data.category_new_text
                                ? data.product_category.document.data.category_new_text
                                : element.category_item_link.document.data.product_new_text
                                    ? element.category_item_link.document.data.product_new_text
                                    : null
                          }</span>
                        </CustomLink>
                    );
                  }
                })
                : items.map((element, index) => {

                  const flavor = element.item_link.document.data.taxonomy_product_flavor
                  const size = element.item_link.document.data.taxonomy_product_size

                  return (
                      <CustomLink
                          key={index}
                          to={element.item_link.url}
                          className="featured-products__item"
                          onClick={() => {

                            // data-layer
                            // TODO add sizes and names (product taxonomy)
                            const dl = {
                              flavor,
                              category: '',
                              position: index + 1,
                              url: element.item_link.url,
                              location: 'explore more section',
                              size
                            }
                            setProductFlavorClickedEvent(dl, oneTrustAccepted)
                          }}
                      >
                        <img className="featured-products__item-image" src={element.item_image.url} alt={element.item_image.alt ? element.item_image.alt : element.item_name} />
                        <span className="featured-products__item-name">{element.item_name}</span>
                        <span className="featured-products__item-tag">{element.item_tag}</span>
                      </CustomLink>
                  );
                })}
          </div>
        </div>
      </section>
  );
};

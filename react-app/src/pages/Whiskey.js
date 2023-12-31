import React from "react"
import { useParams } from "react-router-dom"
import PageScroll from "../components/PageScroll"
import PropTypes from "prop-types"
import ProductDetail from "../components/ProductDetail"
import ProductSummary from "../components/ProductSummary"
import ProductDualPanel from "../components/ProductDualPanel"
import CocktailsSlider from "../components/CocktailsSlider"
import ShopDualPanel from "../components/ShopDualPanel"
import Footer from "../components/Footer"
import CONTENT from "../constants/content"
import { cocktails } from "../constants/menu_items"
import photo_whiskey_summary from "../assets/photo_whiskey_summary.jpg"

const Whiskey = () => {
  const { slug } = useParams("slug")
  const data = CONTENT.whiskeys
  const whiskey = data[slug]

  return (
    <>
      <PageScroll width="100vw" height="100vh">
        <ProductDetail className="page" bgColor="wgrey" product={whiskey} />
        <ProductSummary className="page" product={whiskey} bgColor="cream" />
        <ProductDualPanel
          className="page"
          bgColor="wgrey"
          theme="whiskey"
          content={CONTENT.whiskey_article}
          photo={photo_whiskey_summary}
        />
        <CocktailsSlider className="page" theme="whiskey" items={cocktails.whiskey.slice(0, 3)} />
        <ShopDualPanel className="page" theme="whiskey" content={CONTENT.whiskey_shop} photo={photo_whiskey_summary} />
        <Footer />
      </PageScroll>
    </>
  )
}

Whiskey.propTypes = {
  slug: PropTypes.string,
}

export default Whiskey

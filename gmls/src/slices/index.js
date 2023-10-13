import React from 'react'
import HeroVideo from './HeroVideo'
import HeroText from './HeroText'
import StoryArticle from './StoryArticle'
import StoryPanel from './StoryPanel'
import CocktailsSlider from './CocktailsSlider'
import DrinksPanel from './DrinksPanel'
import FeatureSlider from './FeatureSlider'
import ProductSlider from './ProductSlider'
import FeaturesPanel from './FeaturesPanel'
import DualPanel from './DualPanelStory'
import HeroTextSplit from './HeroTextSplit'
import PageScroll from '../components/PageScroll'

const componentList = {
  herovideo: HeroVideo,
  hero: HeroText,
  stories_section: StoryArticle,
  story_chapters: StoryPanel,
  cocktailsslider: CocktailsSlider,
  drinkspanel: DrinksPanel,
  featureslider: FeatureSlider,
  herotextsplit: HeroTextSplit,
  productslider: ProductSlider,
  featurespanel: FeaturesPanel,
  dualpanelstory: DualPanel,
}

// loop components and append PageScroll to each components
export const components = Object.keys(componentList).reduce((acc, key) => {
  acc[key] = (props) => (
    <PageScroll>{React.createElement(componentList[key], props)}</PageScroll>
  )
  return acc
}, {})

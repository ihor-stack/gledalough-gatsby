import { HeroSection } from './HeroSection'
import { OurStorySection } from "./OurStorySection";
import { FilmSection } from "./FilmSection";
import { ProductDetailsSection } from "./ProductDetailsSection";
import { ProductRangeSection } from './ProductRangeSection'
import { InstagramSection } from "../instagram-section/InstagramSection";
import { VideoSliderSection} from "./VideoSliderSection";
import { MasterDistillerSection } from "./MasterDistillerSection";
import { AboutProductSection } from "./AboutProductSection";
import { PromoModule } from "./PromoModule";
import { CallToActionSection } from './CallToActionSection'
import { ProductLocatorNewProduct} from "./ProductLocator";
import { KeyMessageSection } from "./KeyMessageSection";
import { FeaturedProducts } from "../product-details/FeaturedProducts";
import { HeroVideoSection } from "./HeroVideoSection";



export const components = {
  hero_section: HeroSection,
  our_story: OurStorySection,
  film_section: FilmSection,
  video_slider_section: VideoSliderSection,
  product_details_section: ProductDetailsSection,
  product_range_section: ProductRangeSection,
  instagram_section: InstagramSection,
  master_distiller_section: MasterDistillerSection,
  about_product_section: AboutProductSection,
  promo_module: PromoModule,
  product_locator_module: ProductLocatorNewProduct,
  cta_section: CallToActionSection,
  key_message_section: KeyMessageSection,
  featured_products: FeaturedProducts,
  hero_video_section: HeroVideoSection
}
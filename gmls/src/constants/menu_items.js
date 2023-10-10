// Gin images
import gin_wild_rose_gin from '../assets/gin_wild_rose.jpg';
import gin_wild_botanical_gin from '../assets/gin_wild_botanical.jpg';
import gin_winter_gin from '../assets/gin_wild_rose.jpg';
import gin_autumn_gin from '../assets/gin_wild_rose.jpg';

// Gin botanical images
import botanical_wood_sorrel from '../assets/botanical_wood_sorrel.jpg';
import botanical_gorse from '../assets/botanical_gorse.jpg';
import botanical_scotts_pine from '../assets/botanical_scotts_pine.jpg';
import botanical_hawthorn from '../assets/botanical_hawthorn.jpg';
import botanical_woodruff from '../assets/botanical_woodruff.jpg';
import botanical_primrose from '../assets/botanical_primrose.jpg';

// Whiskey images
import whiskey_7_year_mizunara from '../assets/whiskey_7_year_mizunara.jpg';
import whiskey_pot_still from '../assets/whiskey_pot_still.jpg';
import whiskey_double_barrel from '../assets/whiskey_double_barrel.jpg';
import whiskey_triple_barrel from '../assets/whiskey_triple_barrel.jpg';

// Whiskey Oak images
import oak_us_bourbon_barrels from '../assets/oak_us_bourbon_barrels.jpg';
import oak_spanish_oloroso_casks from '../assets/oak_spanish_oloroso_casks.jpg';
import oak_french_oak from '../assets/oak_french_oak.jpg';
import oak_japanese_mizunara from '../assets/oak_japanese_mizunara.jpg';
import oak_irish_oak from '../assets/oak_irish_oak.jpg';

// Feature images
import thumb_feature_01 from '../assets/thumb_feature_01.jpg';
import thumb_feature_02 from '../assets/thumb_feature_02.jpg';
import thumb_feature_03 from '../assets/thumb_feature_03.jpg';
import thumb_feature_04 from '../assets/thumb_feature_04.jpg';

// Cocktail images
import thumb_cocktail_01 from '../assets/thumb_cocktail_01.jpg';
import thumb_cocktail_02 from '../assets/thumb_cocktail_02.jpg';
import thumb_cocktail_03 from '../assets/thumb_cocktail_03.jpg';
import thumb_cocktail_04 from '../assets/thumb_cocktail_04.jpg';

// Retailer images
import logo_drizly from '../assets/logo_drizly.png';
import logo_minibar from '../assets/logo_minibar.png';
import logo_reserve_bar from '../assets/logo_reserve_bar.png';


// const cocktails = [
//   { title: 'Irish Mule', url: '/cocktail/irish-mule' },
//   { title: 'A Long Way', url: '/cocktail/a-long-way' },
//   { title: 'Tom Collins', url: '/cocktail/tom-collins' },
// ];

const features = {
  'foraging': [
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals', image: thumb_feature_01 },
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals', image: thumb_feature_02 },
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals', image: thumb_feature_03 },
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals', image: thumb_feature_04 },
  ],
  'glendalough': [
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals', image: thumb_feature_01 },
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals', image: thumb_feature_02 },
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals', image: thumb_feature_03 },
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals', image: thumb_feature_04 },
  ],
  'sustainability': [
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals', image: thumb_feature_01 },
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals', image: thumb_feature_02 },
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals', image: thumb_feature_03 },
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals', image: thumb_feature_04 },
  ],
};

const cocktails = {
  'gin': [
    { title: 'Irish Mule', url: '/cocktail/irish-mule', image: thumb_cocktail_01 },
    { title: 'A Long Way', url: '/cocktail/a-long-way', image: thumb_cocktail_02 },
    { title: 'Tom Collins', url: '/cocktail/tom-collins', image: thumb_cocktail_03 },
    { title: 'Fourth Cocktail', url: '/cocktail/cocktail-four', image: thumb_cocktail_04 },
  ],
  'whiskey': [
    { title: 'Irish Mule', url: '/cocktail/irish-mule', image: thumb_cocktail_01 },
    { title: 'A Long Way', url: '/cocktail/a-long-way', image: thumb_cocktail_02 },
    { title: 'Tom Collins', url: '/cocktail/tom-collins', image: thumb_cocktail_03 },
    { title: 'Foraging Botanicals', url: '/cocktail/foraging-botanicals', image: thumb_cocktail_04 },
  ],
  'occasion': [
    { title: 'Irish Mule', url: '/cocktail/irish-mule', image: thumb_cocktail_01 },
    { title: 'A Long Way', url: '/cocktail/a-long-way', image: thumb_cocktail_02 },
    { title: 'Tom Collins', url: '/cocktail/tom-collins', image: thumb_cocktail_03 },
    { title: 'Foraging Botanicals', url: '/cocktail/foraging-botanicals', image: thumb_cocktail_04 },
  ],
};

const gins = [
  { title: 'Rose Gin', url: '/gin/rose-gin', image: gin_wild_rose_gin },
  { title: 'Wild Botanical Gin', url: '/gin/wild-botanical-gin', image: gin_wild_botanical_gin },
  { title: 'Winter Gin', url: '/gin/winter-gin', image: gin_winter_gin },
  { title: 'Autumn Gin', url: '/gin/autumn-gin', image: gin_autumn_gin },
];

const botanicals = [
  { title: 'Wood Sorrel', url: '/foraging-botanicals/wood-sorrel', image: botanical_wood_sorrel },
  { title: 'Gorse', url: '/foraging-botanicals/gorse', image: botanical_gorse },
  { title: 'Scotts Pine', url: '/foraging-botanicals/scotts-pine', image: botanical_scotts_pine },
  { title: 'Hawthorn', url: '/foraging-botanicals/hawthorn', image: botanical_hawthorn },
  { title: 'Woodruff', url: '/foraging-botanicals/woodruff', image: botanical_woodruff },
  { title: 'Primrose', url: '/foraging-botanicals/primrose', image: botanical_primrose },
];

const oaks = [
  { title: 'US Bourbon Barrels', url: '/whiskey-oaks/us-bourbon-barrels', image: oak_us_bourbon_barrels },
  { title: 'Spanish Oloroso Casks', url: '/whiskey-oaks/spanish-oloroso-casks', image: oak_spanish_oloroso_casks },
  { title: 'French Oak', url: '/whiskey-oaks/french-oak', image: oak_french_oak },
  { title: 'Japanese Mizunara', url: '/whiskey-oaks/japanese-mizunara', image: oak_japanese_mizunara },
  { title: 'Irish Oak', url: '/whiskey-oaks/irish-oak', image: oak_irish_oak },
];

const stories = [
  { heading: 'Chapter 1', title: 'This Place', url: '/story/this-place' },
  { heading: 'Chapter 2', title: 'Our Craft', url: '/story/our-craft' },
  { heading: 'Chapter 3', title: 'Our Process', url: '/story/our-process' },
  { heading: 'Chapter 4', title: 'Our People', url: '/story/our-people' },
];

const whiskeys = [
  { title: '7 Year Mizunara', url: '/whiskey/7-year-mizunara', image: whiskey_7_year_mizunara },
  { title: 'Pot Still', url: '/whiskey/pot-still', image: whiskey_pot_still },
  { title: 'Double Barrel', url: '/whiskey/double-barrel', image: whiskey_double_barrel },
  { title: 'Triple Barrel', url: '/whiskey/triple-barrel', image: whiskey_triple_barrel },
];


const slider_items =  [
  {title: '01', url: '/'},
  {title: '02', url: '/'},
  {title: '03', url: '/'},
  {title: '04', url: '/'},
];

const locations = [
  { title: 'Main Street Wine & Spirits', address1: '5425 S La Grange rd', address2: 'La Grange, IL 60525', phone: '(708) 354-0355',  url: '', lat: 37.8, lng: -122.4},
  { title: 'Sav Way Fine Wines & Spirits', address1: '3821 York rd Oak Brook', address2: 'IL 60523', phone: '(708) 354-6550', url: '',  lat: 38, lng: -121},
  { title: 'Prestige Liquors', address1: '1423 W 55th St', address2: 'La Grange, IL 60525', phone: '(708) 354-6969', url: '',  lat: 39, lng: -121},
  { title: 'Binnys Beverage Depot', address1: '5425 S La Grange rd', address2: 'La Grange, IL 60525', phone: '(708) 354-0355', url: '',  lat: 40, lng: -122},
  { title: 'Binnys Beverage Depot', address1: '7714 Madison St', address2: 'Forest Park, IL 60130', phone: '(708) 366-2500', url: '',  lat: 38, lng: -122},
];

const retailers = [
  {title: 'Drizly.com', url:'https://www.drizley.com', image: logo_drizly },
  {title: 'MinibarDelivery.com', url:'https://www.minibardelivery.com', image: logo_minibar },
  {title: 'Reservebar.com', url:'https://www.reservebar.com', image: logo_reserve_bar },
];

const nav_items = [
  { title: 'Our Story', url: '/our-story' },
  { title: 'Gin', url: '/gin' },
  { title: 'Whiskey', url: '/whiskey' },
  { title: 'Cocktails', url: '/cocktails' },
  { title: 'Features', url: '/features' },
];

const footer_items = [
  { title: 'Our Ethos', url: '/our-ethos' },
  { title: 'Contact Us', url: '/contact-us' },
  { title: 'Nutritional Info', url: '/nutritional-info' },
  { title: 'Enjoy Responsibly', url: '/enjoy-responsibly' },
  { title: 'Privacy', url: '/privacy-policy' },
  { title: 'T&CS', url: '/terms-and-conditions' }
];

export { cocktails, features, gins, botanicals, stories, whiskeys, oaks, slider_items, locations, retailers, nav_items, footer_items };
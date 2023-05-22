// Gin images
import gin_rose_gin from '../assets/gin_rose_gin.jpg';
import gin_wild_botanical_gin from '../assets/gin_rose_gin.jpg';
import gin_winter_gin from '../assets/gin_rose_gin.jpg';
import gin_autumn_gin from '../assets/gin_rose_gin.jpg';

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


const cocktails = [
  { title: 'Irish Mule', url: '/cocktail/irish-mule' },
  { title: 'A Long Way', url: '/cocktail/a-long-way' },
  { title: 'Tom Collins', url: '/cocktail/tom-collins' },
];

const features = {
  'Foraging': [
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals' },
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals' },
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals' },
  ],
  'Glendalough': [
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals' },
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals' },
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals' },
  ],
  'Sustainability': [
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals' },
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals' },
    { date: '22 March 2022', title: 'Foraging Botanicals', url: '/feature/foraging-botanicals' },
  ],
};

const gins = [
  { title: 'Rose Gin', url: '/gin/rose-gin', image: gin_rose_gin },
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

export { cocktails, features, gins, botanicals, stories, whiskeys, oaks };
 
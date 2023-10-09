# Glendalough 2023

* React with Gatsby & Prismic


## Links

* [Figma Designs](https://www.figma.com/file/kH8OFcucThVuKTew8G3wBv/Glendalough-Full-Site-Handover)
* [Figma Design - homepage](https://www.figma.com/proto/3pHR6oYG0klbdcxsBXNS3N/030223-Glendalough-Homepage)
* [Figma Design - microsite](https://www.figma.com/file/hniwg9WoHeTpDLwzsXb1qD/Glendalough_Microsite_Handover)
* [Glendalough Youtube video](https://www.youtube.com/watch?v=m-LhahusNvE)
* [Google Drive](https://drive.google.com/drive/folders/1Ng_lhuPck25QXB4ILrceMZlwrvQMiE2E)
* [Clickup](https://app.clickup.com/4637827/v/l/4dh43-8093)
* [Inspiration](http://cellierdeschartreux.fr/fr/les-vins/domaine-saint-ayme)

### React notes 

* [Create React App](https://github.com/facebook/create-react-app)
* [React Typescript issue](https://github.com/facebook/create-react-app/issues/13080)
* [React Class deprecation](https://www.robinwieruch.de/react-hooks-migration)
* [React Hooks utils](https://usehooks.com/)
* [React SC Mixins](https://maddev.netlify.app/development/styled_components_mixins/)
* [React Query](https://tanstack.com/query/v3/docs/react/quick-start)
* [Fullpage paid plugin](https://www.npmjs.com/package/@fullpage/react-fullpage)
* [Fullpage free plugin](https://www.npmjs.com/package/react-page-scroll)
* [React spring](https://www.react-spring.dev/docs/getting-started)
* [React waypoint](https://www.npmjs.com/package/react-waypoint)
* [React Map-GL](https://visgl.github.io/react-map-gl/docs/get-started/get-started)
* [React Hooks tips](https://blog.logrocket.com/react-hooks-cheat-sheet-solutions-common-problems/)
* [React swiper candidates](https://alvarotrigo.com/blog/react-carousels/)
* [Old useState example by Seón](https://codesandbox.io/s/n3jjpo805j)
* [Grain filter (svg)](https://css-tricks.com/grainy-gradients/)
* [React Parallax](https://react-scroll-parallax.damnthat.tv/docs/usage/)
* [React Spring+Router v6](https://codesandbox.io/s/react-router-animated-transitions-w-react-spring-not-working-forked-8py5jb?file=/src/index.js)
 
```
# React from scratch

npx create-react-app my-app
cd my-app
npm start

# additional dependencies
# eslint-config-wesbos = not working as of May 2023
npm i -D @babel/core @babel/eslint-parser @babel/preset-react @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-plugin-styled-components eslint eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-html eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier typescript 

npm i bootstrap dotenv normalize.css prop-types react-bootstrap react-helmet react-router-dom styled-components@5.3.10 web-vitals react-page-scroll @react-spring/web

npm i -D styled-components@5.3.10

# add to package.json:
  "overrides" : {
    "typescript": "^5.0.2"
  }
```


### Fonts

- priori sans
- f37 wicklow
```
<link rel="stylesheet" href="https://use.typekit.net/dsw2zbx.css">

BLACK
font-family: 'priori-sans',sans-serif;
font-weight: 900;
font-style: 'normal';

Priori Sans OT Bold
font-family: 'priori-sans', sans-serif;
font-weight: 700;
font-style: 'normal';

Priori Sans OT Italic
font-family: 'priori-sans', sans-serif;
font-weight: 400;
font-style: 'italic';

Priori Sans OT Regular
font-family: 'priori-sans', sans-serif;
font-weight: 400;
font-style: 'normal';
```

### COLORS
```
// Master palette
$offwhite: #FDFDFC;
$warmwhite: #F6F5EF;
$beige: #D3CBC1;
$white: #FFFFFF;
$darkgreen: #262F2B;
$black: #000000;

// Wild Botanical Gin Palette
$wbgreen: #163029;
$wblightgreen: #A9B89E;
$wboffwhite: #EFEDE6;

// Wild Rose Gin Palette
$wrrose: #633B35;
$wrdarkpink: #875C5A;
$wrpink: #D4B6B4;

// Whisky Palette
background: #474938;
background: #8E8982;

```


### GLENDALOUGH PAGES

* Home
* Our Story
* Gin
* Whiskey
* Poitín (???)
* Cocktails
* Features 


### SECONDARY PAGES

* Our Ethos
* Contact Us
* Nutritional Info
* Enjoy Responsibly
* Privacy
* Terms & Conditions


### MAIN PAGE COMPONENTS

* Home
    - Hero Video
    - Hero Text
    - Product Slider
    - Story Slider
    - Cocktails Slider
    - Footer

* Our Story
    - Hero Video
    - Hero Text
    - Story Intro 1-2
    - Story Intro 3-4
    - Footer

* Story
    - Story Panel
    - Story Panel
    - Story Panel
    - Story Panel
    - Footer

* Gin | Whiskey | Poitín (Home)
    - Hero Video
    - Hero Text Split
    - Product Slider
    - Features List
    - Feature Intro
    - Footer
    
* Gin | Whiskey | Poitín (Product)
    - Product Intro
    - Product Feature
    - Product Hero
    - Cocktail Slider
    - Shop CTA
    - Footer

* Cocktails
    - Hero Video
    - Cocktail Slider
    - Cocktail Slider
    - Cocktail Slider
    - Story Slider
    - Footer
    
* Cocktail
    - Hero Video
    - Cocktail Instructions
    - Cocktail Slider
    - Footer

* Features
    - Hero Video
    - Feature Slider
    - Feature Slider
    - Feature Slider
    - Story Slider
    - Footer

* Feature
    - Feature Article
    - Feature Secondary
    - Story Slider
    - Footer


### SECONDARY PAGE COMPONENTS

* Our Ethos
    - ???
    - Footer


* Contact Us
    - Retailer List
    - Retailer Map
    - Online Shops
    - Footer


* Nutritional Info
    - ???
    - Footer


* Enjoy Responsibly
    - ???
    - Footer

* Privacy
    - Legal Paragraphs
    - Footer

* Terms & Conditions
    - ??? (Legal Paragraphs)
    - Footer

 
### Questions

* Home / all - What would be used for a 'loading ...' state
* Our story - images cannot overlap  if using fullpage scroll
* very different hex values - e.g. warmwhite bg
* f37 / updated fonts? using google webfont 'Spectral' as placeholder
* very different heights for fullpage panels - e.g. Gin home (supposed to be square or 2 panels?)
* slider 'dot navigation' doesnt really make sense when a (variable) number of slides are visible at once

...
https://markanthony.atlassian.net/wiki/spaces/MWGS/pages/2167668808/MAG+CW+Project+Gatsby+React+and+Prismic

https://markanthony.atlassian.net/wiki/spaces/MWGS/pages/2168815617/Multi-language+site

https://markanthony.atlassian.net/wiki/spaces/MWGS/pages/2167668846/Config+files

https://github.com/prismicio/gatsby-multi-language-site


...
https://prismic.io/docs/react

https://prismic.io/docs/starters-gatsby

https://prismic.io/docs/gatsby

https://prismic.io/page-builder

https://makersden.io/blog/create-sectional-website-builder-with-prismic-gatsby

...

```
npx prismic-cli@latest theme --theme-url https://github.com/prismicio/gatsby-multi-language-site --conf prismic-configuration.js
```

Prismic = CDN + CMS
Gatsby = just site builder

Define custom types in gatsby (and Slices)

use starter template
with:
prismic-src
gatsby-images

Custom type for each page
- repeatable for similar pages
- single for homepage / contact etc.
- add fields
- create content page - select custom types

- hit top right icon / preview
- hit 2nd top right 'publish'
- publish as release = all changed pages.

/templates = graphql queries
/slices

generate schema from prismic

localhost:8000/__graphql
> check fields (checkbox) to select for given page

can create a page query with params

activedoc for lang

cant use static queries with variables

2 queries for multilang

















...











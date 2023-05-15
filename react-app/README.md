# Glendalough 2023

* React with Gatsby & Prismic


## Links

* [Figma Designs](https://www.figma.com/file/kH8OFcucThVuKTew8G3wBv/Glendalough-Full-Site-Handover)
* [Figma Design - homepage](https://www.figma.com/proto/3pHR6oYG0klbdcxsBXNS3N/030223-Glendalough-Homepage)
* [Google Drive](https://drive.google.com/drive/folders/1Ng_lhuPck25QXB4ILrceMZlwrvQMiE2E)

### React notes

* [Create React App](https://github.com/facebook/create-react-app)
* [React Typescript issue](https://github.com/facebook/create-react-app/issues/13080)
* [React Class deprecation](https://www.robinwieruch.de/react-hooks-migration)
* [Fullpage paid plugin](https://www.npmjs.com/package/@fullpage/react-fullpage)
* [Fullpage free plugin](https://www.npmjs.com/package/react-page-scroll)
* [React spring](https://www.react-spring.dev/docs/getting-started)
* [React waypoint](https://www.npmjs.com/package/react-waypoint)
* [React Map-GL](https://visgl.github.io/react-map-gl/docs/get-started/get-started)
* [React hooks tips](https://blog.logrocket.com/react-hooks-cheat-sheet-solutions-common-problems/)
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

### Glendalough Pages

* Home
* OurStory
* Gin
* Whiskey
* Cocktails
* Features
* Ethos
* Contact
* Tours
* Privacy
* Terms


### Glendalough Components

* Home
    - Nav
    - Hero
    - SubHero
    - Drinks (Gin|Whiskey)
    - OurStory
    - Cocktails
    - News
    - Footer
    - ModalEmail PopUp (why)

* Tertiary
    - Heading
    - Body
    - BodyImage
    - News *
    - Footer

* Gin 
    - Nav *
    - Hero *?
    - Slider
    - Thumbs + detail
    - ModalVideo
    - Story
    - Awards
    - News *
    - Footer *

- Product (gin/Whiskey)
    - Nav *
    - ProductHero
    - Notes
    - Impact (Story)
    - Thumbs
    - Connect
    - Footer *

- Story
    - Nav *
    - Hero
    - Panel1
    - Panel2
    - Panel3
    - Panel4
    - News *
    - Footer *

- Article
    - Nav *
    - Heading
    - Panel1
    - Panel2
    - Panel3
    - Panel4
    - News *
    - Footer *

- Whiskey
    - Nav *
    - Hero *?
    - Slider
    - Thumbs + detail
    - ModalVideo
    - Story
    - Awards
    - News *
    - Footer *


- Features
    - Nav *
    - Heading
    - Filter
    - Thumbs
    - News *
    - Footer *

- Feature (blog post)
    - Nav *
    - Heading
    - HeroImage
    - Article
    - Gallery
    - News *
    - Footer *

- Cocktails
    - Nav *
    - Heading
    - Thumbs (Gin/Whiskey/Occasion)
    - Thumbs (Bar Drinks)
    - News *
    - Footer *

- Cocktail
    - Nav *
    - Heading
    - Hero
    - Recipe
    - News *
    - Footer *
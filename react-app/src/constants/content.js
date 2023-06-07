// Gin feature images (6)
import gin_feature_image_01 from '../assets/foraging_feature_01.jpg';

// Whiskey feature images (5)
import whiskey_feature_image_01 from '../assets/oak_us_bourbon_barrels-large.jpg';

// Gin products
import gin_wild_rose from '../assets/gin_wild_rose-large.png';
import gin_wild_botanical from '../assets/gin_wild_botanical-large.png';

// Whiskey products
import whiskey_7_year_mizunara from '../assets/whiskey_7_year_mizunara.png';
import whiskey_double_barrel from '../assets/whiskey_double_barrel.png';
import whiskey_pot_still from '../assets/whiskey_pot_still.png';
import whiskey_triple_barrel from '../assets/whiskey_triple_barrel.png';

// Features photos
import feature_01_photo_01 from '../assets/feature_01_photo_01.jpg';
import feature_01_photo_02 from '../assets/feature_01_photo_02.jpg';
import feature_01_photo_03 from '../assets/feature_01_photo_03.jpg';
import feature_01_photo_04 from '../assets/feature_01_photo_04.jpg';

// Story photos
import story_01_photo_01 from '../assets/story_01_photo_01.jpg';
import story_01_photo_02 from '../assets/story_01_photo_02.jpg';
import story_01_photo_03 from '../assets/story_01_photo_03.jpg';
import story_01_photo_04 from '../assets/story_01_photo_04.jpg';
import story_01_photo_05 from '../assets/story_01_photo_05.jpg';

// Cocktails photos
import photo_cocktail_01 from '../assets/photo_cocktail_01.jpg';

const home_intro = "At Glendalough Distillery we progressively-craft luxury spirits in the Wicklow Mountains. We hope these spirits evoke a sense of place through their depth of flavour as they are an expression of what we love about these mountains.";

const story1 = {
    url: '/story/story-one',
    bg: 'beige',
    heading: 'Chapter 1',
    title: 'This place',
    p1: 'The story of St Kevin is where we draw our inspiration. He abandoned safety and comfort to follow his passion and create something more meaningful in the mountains.',
}
const story2 = {
    url: '/story/story-two',
    heading: 'Chapter 2',
    title: 'Our Craft',
    p1_title: 'Botanicals',
    p1: 'To make our gins, we forage wild plants from the mountains around the distillery. What we pick goes fresh into the still within hours of foraging. All the plants are sustainably foraged by one person, every day we distil.',
    p2_title: 'Wood',
    p2: 'A key influence on the flavour of our whiskey comes from the wood it has spent time in. There are countless nuances in how that wood effects and injects flavour, from the straightness of the tree or fineness of the grain to the size of the barrel or depth of the char.'
}
const story3 = {
    url: '/story/story-three',
    heading: 'Chapter 3',
    title: 'Our Process',
    p1: 'After many an evening\'s banter and debate over why there weren\'t more craft distilleries in the birthplace of distilling, the friends convinced each other to leave the safety of their day jobs, head into the mountains and take a chance on something more meaningful (much like the man on the bottle, St Kevin). Together they built a craft distillery near their favourite spot in those mountains, Glendalough.',
}
const story4 = {
    url: '/story/story-four',
    bg: 'beige',
    heading: 'Chapter 4',
    title: 'Our People',
    p1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non molestie augue. Aliquam eget risus at dui consectetur auctor at id risus. Proin porttitor est ante, venenatis sagittis leo posuere quis.',
}

const gin_intro = {
    heading: 'Gins from a place and time',
    title: 'Discover Our Spirit',
    p1: 'Using purposeful & sustainable methods to protect the limited resources of the mountains, we forage from around late February to early November. What we pick is brought fresh to the distillery every day as quickly as possible to capture the plants essential oils before they wilt. We believe this is the truest taste of our mountain home and what adds the complex layers of flavor to our gins.',
}

const gin_botanicals_intro = {
    title: 'Fresh Hand-Picked Botanicals',
    p1: 'What we forage changes with the seasons. It can even change by the day depending on weather. Every day is different in the Mountains. It is different each time we turn on the still too. Our distilling methods can\'t be automated, or timed, they must go by taste and smell. Recipes must be tweaked every day to balance what is going in the still.',
    p2: 'In a way each batch is like the first one we\'ve ever made. Hand-foraged,  wild ingredients. Each day, we venture into the surrounding mountains. The wild native plants we forage are fresh-distilled to capture the intrinsic nature, the essence of those mountains.',
}

const gin_article = {
    title: 'Meet Irelands only Fulltime forager',
    p1: 'Our aim is to leave no trace that we were ever there. It\'s harder work but worth it to keep the mountains beautiful and wild.',
    p2: 'Then these wild botanicals are painstakingly slow-distilled to tease out delicate flavours, in very small batches of less than 250 liters. Some go in the pot, and some are hung in a basket to let vapours extract their essential oils. The cut-points are decided batch by batch, by smell and taste (never timed or automated) as if each batch is the first.',
}

const gin_shop = {
    title: 'Purchase Our Irish Gins',
    p1: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.',
    image_01: gin_wild_rose,
    image_02: gin_wild_botanical,
}

const gin_features = [{
    image: gin_feature_image_01,
    title: 'Wood Sorrel',
    intro: 'Wood sorrel is a pretty, shamrock-like plant that grows in the woods and shady places of Ireland. It is one of the wild foods that was widely eaten in Ireland.',
    p1heading: 'Wood Sorrel',
    p1: 'Wood sorrel has sharp, tangy notes, just like lemon. In former times when lemons were only available in winter, wood sorrel was used to make sauces, soups and as a garnish for fish including salmon and trout.',
    p2heading: 'Folklore',
    p2: 'The Irish for sorrel is seamsóg, or seamróg coille, shamrock of the woods. Sorrel was sometimes used in place of shamrock to pin on dresses and jackets as our national symbol on St. Patrick\'s Day.',
}];


const gins = {
    'rose-gin': {
        image: gin_wild_rose,
        heading: 'Made with depth and meaning',
        title: 'Rose Gin',
        p1: 'This fresh, rose-petal gin was first made to honour our head distiller\'s mum, Rose, at his little brother\'s wedding. Rose had recently passed away, and this was his way to have her there in spirit - literally.',
        p2: 'Carefully-tended flowers, from her rose garden are slowly vapor distilled with wild roses and plants from the mountains around the distillery to make this an intensely floral gin.',
        notes_title: 'Tasting Notes',
        note_p1_heading: 'The Nose',
        note_p1: 'Bright lemon and blood orange, soft juniper notes, deep aromatic notes, perfumed with fresh rose.',
        note_p2_heading: 'The Taste',
        note_p2: 'Distinct Rose Petal, turkish delight, bright berries, with a nectar sweetness.',
        note_p3_heading: 'The Finish',
        note_p3: 'Flower and notes linger with pink peppercorn and earthy spices.',
        summary_heading: 'Impact',
        summary_p1: 'Our aim is to leave no trace that we were ever there. It\'s harder work but worth it to keep the mountains beautiful and wild.',
        summary_p2: 'Then these wild botanicals are painstakingly slow-distilled to tease out delicate flavours, in very small batches of less than 250 liters. Some go in the pot, and some are hung in a basket to let vapours extract their essential oils. The cut-points are decided batch by batch, by smell and taste (never timed or automated) as if each batch is the first.',
    },
    'wild-botanical-gin': {
        image: gin_wild_botanical,
        heading: 'Made with depth and meaning',
        title: 'Wild Botanical Gin',
        p1: 'This fresh, rose-petal gin was first made to honour our head distiller\'s mum, Rose, at his little brother\'s wedding. Rose had recently passed away, and this was his way to have her there in spirit - literally.',
        p2: 'Carefully-tended flowers, from her rose garden are slowly vapor distilled with wild roses and plants from the mountains around the distillery to make this an intensely floral gin.',
        notes_title: 'Tasting Notes',
        note_p1_heading: 'The Nose',
        note_p1: 'Bright lemon and blood orange, soft juniper notes, deep aromatic notes, perfumed with fresh rose.',
        note_p2_heading: 'The Taste',
        note_p2: 'Distinct Rose Petal, turkish delight, bright berries, with a nectar sweetness.',
        note_p3_heading: 'The Finish',
        note_p3: 'Flower and notes linger with pink peppercorn and earthy spices.',
        summary_heading: 'Impact',
        summary_p1: 'Our aim is to leave no trace that we were ever there. It\'s harder work but worth it to keep the mountains beautiful and wild.',
        summary_p2: 'Then these wild botanicals are painstakingly slow-distilled to tease out delicate flavours, in very small batches of less than 250 liters. Some go in the pot, and some are hung in a basket to let vapours extract their essential oils. The cut-points are decided batch by batch, by smell and taste (never timed or automated) as if each batch is the first.',
    },
    'winter-gin': {
        image: gin_wild_botanical,
        heading: 'Made with depth and meaning',
        title: 'Winter Gin',
        p1: 'This fresh, rose-petal gin was first made to honour our head distiller\'s mum, Rose, at his little brother\'s wedding. Rose had recently passed away, and this was his way to have her there in spirit - literally.',
        p2: 'Carefully-tended flowers, from her rose garden are slowly vapor distilled with wild roses and plants from the mountains around the distillery to make this an intensely floral gin.',
        notes_title: 'Tasting Notes',
        note_p1_heading: 'The Nose',
        note_p1: 'Bright lemon and blood orange, soft juniper notes, deep aromatic notes, perfumed with fresh rose.',
        note_p2_heading: 'The Taste',
        note_p2: 'Distinct Rose Petal, turkish delight, bright berries, with a nectar sweetness.',
        note_p3_heading: 'The Finish',
        note_p3: 'Flower and notes linger with pink peppercorn and earthy spices.',
        summary_heading: 'Impact',
        summary_p1: 'Our aim is to leave no trace that we were ever there. It\'s harder work but worth it to keep the mountains beautiful and wild.',
        summary_p2: 'Then these wild botanicals are painstakingly slow-distilled to tease out delicate flavours, in very small batches of less than 250 liters. Some go in the pot, and some are hung in a basket to let vapours extract their essential oils. The cut-points are decided batch by batch, by smell and taste (never timed or automated) as if each batch is the first.',
    },
    'autumn-gin': {
        image: gin_wild_botanical,
        heading: 'Made with depth and meaning',
        title: 'Autumn Gin',
        p1: 'This fresh, rose-petal gin was first made to honour our head distiller\'s mum, Rose, at his little brother\'s wedding. Rose had recently passed away, and this was his way to have her there in spirit - literally.',
        p2: 'Carefully-tended flowers, from her rose garden are slowly vapor distilled with wild roses and plants from the mountains around the distillery to make this an intensely floral gin.',
        notes_title: 'Tasting Notes',
        note_p1_heading: 'The Nose',
        note_p1: 'Bright lemon and blood orange, soft juniper notes, deep aromatic notes, perfumed with fresh rose.',
        note_p2_heading: 'The Taste',
        note_p2: 'Distinct Rose Petal, turkish delight, bright berries, with a nectar sweetness.',
        note_p3_heading: 'The Finish',
        note_p3: 'Flower and notes linger with pink peppercorn and earthy spices.',
        summary_heading: 'Impact',
        summary_p1: 'Our aim is to leave no trace that we were ever there. It\'s harder work but worth it to keep the mountains beautiful and wild.',
        summary_p2: 'Then these wild botanicals are painstakingly slow-distilled to tease out delicate flavours, in very small batches of less than 250 liters. Some go in the pot, and some are hung in a basket to let vapours extract their essential oils. The cut-points are decided batch by batch, by smell and taste (never timed or automated) as if each batch is the first.',
    },
};


const whiskey_intro = {
    heading: 'Whiskey & wood, a love story',
    title: 'Discover Our Whiskeys',
    p1: 'Using purposeful & sustainable methods to protect the limited resources of the mountains, we forage from around late February to early November. What we pick is brought fresh to the distillery every day as quickly as possible to capture the plants essential oils before they wilt. We believe this is the truest taste of our mountain home and what adds the complex layers of flavor to our gins.',
}

const whiskey_botanicals_intro = {
    title: 'Relentless Persuit of Flavour',
    p1: 'We don\'t say this lightly, and we don\'t find it easily. Our wood program is a testament to our relentless persuit of flavour. We\'ve ventured deep into the oldest parts of the mountains - of wicklow and beyond to find these through provoking tastes.',
    p2: 'While american white oak forms the backbone of our maturaion, Irish, Jananese, french and spanish oak are used to finish our various whsikeys. Each impart discernable unique and exquiste flavours.',
}

const whiskey_oaks_intro = {
    title: 'The Worlds Best Oak',
    p1: 'A key influence on the flavour of our whiskey comes from the wood it has spent time in. There are countless nuances in how that wood effects and injects flavour; the straightness of the tree, the fineness of the grain, the size of the barrel or the depth of the char. Our wood program is a testament to our relentless pursuit of flavour.',
    p2: 'American white oak forms the backbone of our maturation and where we venture off the beaten track is by finishing all of our whiskeys in a second (and sometimes third) very different cask. Irish, Japanese, French and Spanish oak are used to finish some of our various whiskeys. Each impart discernible, unique and exquisite flavours.',
}

const whiskey_article = {
    title: 'Meet Rowdy',
    p1: 'Our aim is to leave no trace that we were ever there. It\'s harder work but worth it to keep the mountains beautiful and wild.',
    p2: 'Then these wild botanicals are painstakingly slow-distilled to tease out delicate flavours, in very small batches of less than 250 liters. Some go in the pot, and some are hung in a basket to let vapours extract their essential oils. The cut-points are decided batch by batch, by smell and taste (never timed or automated) as if each batch is the first.',
}

const whiskey_features = [{
    image: whiskey_feature_image_01,
    title: 'US Bourbon Barrels',
    intro: 'Donec pharetra imperdiet dolor, ut cursus enim dictum vitae. L orem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor vestibulum nibh nec ullamcorper. Aliquam orci ante, condimentum ac auctor vel, eleifend sit amet elit. Aliquam erat volutpat. Praesent sed urna non elit interdum porta.',
    p1heading: 'Folklore',
    p1: 'The Irish for sorrel is seamsóg, or seamróg coille, shamrock of the woods. Sorrel was sometimes used in place of shamrock to pin on dresses and jackets as our national symbol on St. Patrick\'s Day.'
}];

const whiskey_shop = {
    title: 'Purchase Our Irish Whiskeys',
    p1: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.',
    image_01: whiskey_7_year_mizunara,
    image_02: whiskey_double_barrel,
}

const whiskeys = {
    '7-year-mizunara': {
        image: whiskey_7_year_mizunara,
        heading: 'Irish whiskey aged in two barrels',
        title: '7 Year Mizunara',
        p1: 'This fresh, rose-petal gin was first made to honour our head distiller\'s mum, Rose, at his little brother\'s wedding. Rose had recently passed away, and this was his way to have her there in spirit - literally.',
        p2: 'Carefully-tended flowers, from her rose garden are slowly vapor distilled with wild roses and plants from the mountains around the distillery to make this an intensely floral gin.',
        notes_title: 'Tasting Notes',
        note_p1_heading: 'The Nose',
        note_p1: 'Bright lemon and blood orange, soft juniper notes, deep aromatic notes, perfumed with fresh rose.',
        note_p2_heading: 'The Taste',
        note_p2: 'Distinct Rose Petal, turkish delight, bright berries, with a nectar sweetness.',
        note_p3_heading: 'The Finish',
        note_p3: 'Flower and notes linger with pink peppercorn and earthy spices.',
        summary_heading: 'Impact',
        summary_p1: 'Our aim is to leave no trace that we were ever there. It\'s harder work but worth it to keep the mountains beautiful and wild.',
        summary_p2: 'Then these wild botanicals are painstakingly slow-distilled to tease out delicate flavours, in very small batches of less than 250 liters. Some go in the pot, and some are hung in a basket to let vapours extract their essential oils. The cut-points are decided batch by batch, by smell and taste (never timed or automated) as if each batch is the first.',
    },
    'pot-still': {
        image: whiskey_pot_still,
        heading: 'Irish whiskey aged in two barrels',
        title: 'Pot Still',
        p1: 'This fresh, rose-petal gin was first made to honour our head distiller\'s mum, Rose, at his little brother\'s wedding. Rose had recently passed away, and this was his way to have her there in spirit - literally.',
        p2: 'Carefully-tended flowers, from her rose garden are slowly vapor distilled with wild roses and plants from the mountains around the distillery to make this an intensely floral gin.',
        notes_title: 'Tasting Notes',
        note_p1_heading: 'The Nose',
        note_p1: 'Bright lemon and blood orange, soft juniper notes, deep aromatic notes, perfumed with fresh rose.',
        note_p2_heading: 'The Taste',
        note_p2: 'Distinct Rose Petal, turkish delight, bright berries, with a nectar sweetness.',
        note_p3_heading: 'The Finish',
        note_p3: 'Flower and notes linger with pink peppercorn and earthy spices.',
        summary_heading: 'Impact',
        summary_p1: 'Our aim is to leave no trace that we were ever there. It\'s harder work but worth it to keep the mountains beautiful and wild.',
        summary_p2: 'Then these wild botanicals are painstakingly slow-distilled to tease out delicate flavours, in very small batches of less than 250 liters. Some go in the pot, and some are hung in a basket to let vapours extract their essential oils. The cut-points are decided batch by batch, by smell and taste (never timed or automated) as if each batch is the first.',
    },
    'double-barrel': {
        image: whiskey_double_barrel,
        heading: 'Irish whiskey aged in two barrels',
        title: 'Double Barrel',
        p1: 'This fresh, rose-petal gin was first made to honour our head distiller\'s mum, Rose, at his little brother\'s wedding. Rose had recently passed away, and this was his way to have her there in spirit - literally.',
        p2: 'Carefully-tended flowers, from her rose garden are slowly vapor distilled with wild roses and plants from the mountains around the distillery to make this an intensely floral gin.',
        notes_title: 'Tasting Notes',
        note_p1_heading: 'The Nose',
        note_p1: 'Bright lemon and blood orange, soft juniper notes, deep aromatic notes, perfumed with fresh rose.',
        note_p2_heading: 'The Taste',
        note_p2: 'Distinct Rose Petal, turkish delight, bright berries, with a nectar sweetness.',
        note_p3_heading: 'The Finish',
        note_p3: 'Flower and notes linger with pink peppercorn and earthy spices.',
        summary_heading: 'Impact',
        summary_p1: 'Our aim is to leave no trace that we were ever there. It\'s harder work but worth it to keep the mountains beautiful and wild.',
        summary_p2: 'Then these wild botanicals are painstakingly slow-distilled to tease out delicate flavours, in very small batches of less than 250 liters. Some go in the pot, and some are hung in a basket to let vapours extract their essential oils. The cut-points are decided batch by batch, by smell and taste (never timed or automated) as if each batch is the first.',
    },
    'triple-barrel': {
        image: whiskey_triple_barrel,
        heading: 'Irish whiskey aged in two barrels',
        title: 'Triple Barrel',
        p1: 'This fresh, rose-petal gin was first made to honour our head distiller\'s mum, Rose, at his little brother\'s wedding. Rose had recently passed away, and this was his way to have her there in spirit - literally.',
        p2: 'Carefully-tended flowers, from her rose garden are slowly vapor distilled with wild roses and plants from the mountains around the distillery to make this an intensely floral gin.',
        notes_title: 'Tasting Notes',
        note_p1_heading: 'The Nose',
        note_p1: 'Bright lemon and blood orange, soft juniper notes, deep aromatic notes, perfumed with fresh rose.',
        note_p2_heading: 'The Taste',
        note_p2: 'Distinct Rose Petal, turkish delight, bright berries, with a nectar sweetness.',
        note_p3_heading: 'The Finish',
        note_p3: 'Flower and notes linger with pink peppercorn and earthy spices.',
        summary_heading: 'Impact',
        summary_p1: 'Our aim is to leave no trace that we were ever there. It\'s harder work but worth it to keep the mountains beautiful and wild.',
        summary_p2: 'Then these wild botanicals are painstakingly slow-distilled to tease out delicate flavours, in very small batches of less than 250 liters. Some go in the pot, and some are hung in a basket to let vapours extract their essential oils. The cut-points are decided batch by batch, by smell and taste (never timed or automated) as if each batch is the first.',
    },
};


const features = [
    {
        date: '22 March 2022',
        heading: 'Glendalough Distillery features',
        title: 'Foraging Botanicals',
        url: '/feature/foraging-botanicals',
        summary: '“All the plants are sustainably picked by our full time forager, every day we distil. We take a lot of care that we don\'t adversely affect the areas we find them in.”',
        primary_ps: [
            'All the plants are sustainably picked by our full time forager, every day we distil. We take a lot of care that we don\'t adversely affect the areas we find them in. That means sometimes using scissors rather than picking to make sure roots aren\'t pulled, or maybe skipping a few before picking the next one, or finding different patches of the same plant, to make sure an area isn\'t over-foraged.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend lorem ipsum, sed ornare ante convallis vitae. Praesent in varius odio. Nam vel tempor diam. Ut condimentum efficitur sapien ac tincidunt. Ut tincidunt, augue sed rutrum fermentum, tellus massa lacinia urna, nec condimentum orci arcu non ante. Aliquam tempus dui vitae erat pretium pretium. Curabitur vel mollis leo.',
            'Aenean rhoncus nibh eleifend, luctus nunc nec, malesuada eros. Ut eu ipsum semper lacus varius euismod a sit amet mauris. Donec sit amet iaculis velit, nec consequat ligula. Nunc feugiat erat ac magna faucibus cursus. Ut diam ex, rhoncus vitae lorem quis, interdum facilisis nibh. Cras eu dolor nisl. Mauris hendrerit maximus ante nec maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Nullam eleifend lorem ipsum, sed ornare ante convallis vitae. Praesent in varius odio. Nam vel tempor diam. Ut condimentum efficitur sapien ac tincidunt. Ut tincidunt, augue sed rutrum fermentum, tellus massa lacinia urna, nec condimentum orci arcu non ante. Aliquam tempus dui vitae erat pretium pretium. Curabitur vel mollis leo.',
            'Aenean rhoncus nibh eleifend, luctus nunc nec, malesuada eros. Ut eu ipsum semper lacus varius euismod a sit amet mauris. Donec sit amet iaculis velit, nec consequat ligula. Nunc feugiat erat ac magna faucibus cursus. Ut diam ex, rhoncus vitae lorem quis, interdum facilisis nibh. Cras eu dolor nisl. Mauris hendrerit maximus ante nec maximus.',
        ],
        photo_1: feature_01_photo_01,
        photo_2: feature_01_photo_02,
        photo_3: feature_01_photo_03,
        photo_4: feature_01_photo_04,
        secondary_title: 'Lorem Ipsum sit dalor, eaque quae abill inventore quasi dicta',
        secondary_p1: ' Nullam eleifend lorem ipsum, sed ornare ante convallis vitae. Praesent in varius odio. Nam vel tempor diam. Ut condimentum efficitur sapien ac tincidunt. Ut tincidunt, augue sed rutrum fermentum, tellus massa lacinia urna, nec condimentum orci arcu non ante. Aliquam tempus dui vitae erat pretium pretium. Curabitur vel mollis leo.',
        secondary_p2: 'Aenean rhoncus nibh eleifend, luctus nunc nec, malesuada eros. Ut eu ipsum semper lacus varius euismod a sit amet mauris. Donec sit amet iaculis velit, nec consequat ligula. Nunc feugiat erat ac magna faucibus cursus. Ut diam ex, rhoncus vitae lorem quis, interdum facilisis nibh. Cras eu dolor nisl. Mauris hendrerit maximus ante nec maximus.',
    },
];

const stories = [
    {
        date: '22 March 2022',
        heading: 'Chapter 1',
        title: 'This place',
        url: '/story/this-place',
        ps: [{ title: 'The Valley', photo: story_01_photo_01, photo2: story_01_photo_02, body: 'Glendalough, or the Glen of two Lakes, is one of the most beautiful, and visited valleys in Ireland. Just south of Dublin, the Wicklow Mountains are renowned for their natural, scenic beauty. The area known as “the garden of Ireland” - a name it lives up to with ease.' },
        { title: 'The Ruins', photo: story_01_photo_03, body: 'St Kevin\'s legacy still stands in stone by the lower lake. What remains of the monastic settlement, parts of it 14 centuries old, are remarkably intact, and truly awe-inspiring to walk amongst. People have been drawn here for thousands of years. The spectacular scenery and ancient ruins are soul-stirring and inspirational. And their effect never fades no matter how many times you go back.' },
        { title: 'St. Kevin', photo: story_01_photo_04, summary: 'Monks would distill an eau de vie sometimes using medicinal plants, not unlike today\'s gin', body: 'Glendalough is also renowned for its 6th century monastic settlement founded by St Kevin, the man on our bottle. Monasteries like Glendalough around the time of St Kevin, were the birthplace of distilled drinks. Monks would distill an eau de vie sometimes using medicinal plants, not unlike today\'s gin, and often storing it in oak which lead to the invention of whiskey.' },
        { title: 'Seven Churches', photo: story_01_photo_05, body: 'He was so at one with nature, she felt safe enough to lay her eggs. This he took as a sign, as a test of his resolve. So he stood day and night until the eggs hatched and the chicks fledged. One of many stories that  spread around Ireland and inspired people to seek out this holy man and his deep, hidden valley. He eventually built his "City of 7 Churches" by the lower lake that still stands 14 centuries later.' }],
    }
];

const cocktails = {
    'irish-mule': {
        title: 'Irish Mule',
        image: photo_cocktail_01,
        ingredients: [
            '2 oz Wild Botanical Gin',
            '3/4 oz Fresh Lime Juice',
            '3/4 oz Simple Syrup'],
        instructions: ['Garnish with Fresh mint'],
        preperations: [
            'Shake up all three ingredients in a cocktail shaker and strain into a chilled coup.',
            'Or for a longer version, this can be built over ice in a highball glass and topped with soda water.'
        ]
    },
    'a-long-way': {
        title: 'A Long Way',
        image: photo_cocktail_01,
        ingredients: [
            '2 oz Wild Botanical Gin',
            '3/4 oz Fresh Lime Juice',
            '3/4 oz Simple Syrup'],
        instructions: ['Garnish with Fresh mint'],
        preperations: [
            'Shake up all three ingredients in a cocktail shaker and strain into a chilled coup.',
            'Or for a longer version, this can be built over ice in a highball glass and topped with soda water.'
        ]
    },
    'tom-collins': {
        title: 'Tom Collins',
        image: photo_cocktail_01,
        ingredients: [
            '2 oz Wild Botanical Gin',
            '3/4 oz Fresh Lime Juice',
            '3/4 oz Simple Syrup'],
        instructions: ['Garnish with Fresh mint'],
        preperations: [
            'Shake up all three ingredients in a cocktail shaker and strain into a chilled coup.',
            'Or for a longer version, this can be built over ice in a highball glass and topped with soda water.'
        ]
    },
    'cocktail-four': {
        title: 'Cocktail Four',
        image: photo_cocktail_01,
        ingredients: [
            '2 oz Wild Botanical Gin',
            '3/4 oz Fresh Lime Juice',
            '3/4 oz Simple Syrup'],
        instructions: ['Garnish with Fresh mint'],
        preperations: [
            'Shake up all three ingredients in a cocktail shaker and strain into a chilled coup.',
            'Or for a longer version, this can be built over ice in a highball glass and topped with soda water.'
        ]
    },
}

const CONTENT = {
    home_intro,
    story1,
    story2,
    story3,
    story4,
    gins,
    gin_intro,
    gin_botanicals_intro,
    gin_article,
    gin_features,
    gin_shop,
    whiskeys,
    whiskey_intro,
    whiskey_botanicals_intro, // not used anymore ?
    whiskey_oaks_intro,
    whiskey_article,
    whiskey_features,
    whiskey_shop,
    features,
    stories,
    cocktails
}

export default CONTENT;
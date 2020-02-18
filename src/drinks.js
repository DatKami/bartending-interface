const drinks = [
    {
        name: 'Bad Touch',
        cost: 250,
        index: 1,
        ingredients: {
            adelhyde: 0,
            bronsonExtract: 2,
            powderedDelta: 2,
            flanergide: 2,
            karmotrine: 4,
            rocks: true,
            aged: false,
            blended: false
        },
        style: {
            paddingRight: '2.5rem'
        },
      flavorText: 'We\'re nothing but mammals after all.',
      flavorTypes: ['Sour', 'Classy', 'Vintage']
    },  
    {
        name: 'Beer',
        cost: 200,
        index: 2,
        ingredients: {
            adelhyde: 1,
            bronsonExtract: 2,
            powderedDelta: 1,
            flanergide: 2,
            karmotrine: 4,
            rocks: false,
            aged: false,
            blended: false
        },
        flavorText: 'Traditionally-brewed beer has become a luxury, but this one\'s pretty close to the real deal...',
        flavorTypes: ['Bubbly', 'Classy', 'Vintage']
    },  
    {
        name: 'Bleeding Jane',
        cost: 200,
        index: 3,
        ingredients: {
            adelhyde: 0,
            bronsonExtract: 1,
            powderedDelta: 3,
            flanergide: 3,
            karmotrine: 0,
            rocks: false,
            aged: false,
            blended: true
        },
        flavorText: 'Say the name of this drink three time in front of a mirror and you\'ll look like a fool.',
        flavorTypes: ['Spicy', 'Classic', 'Sobering']
    },
    {
        name: 'Bloom Light',
        cost: 230,
        index: 4,
        ingredients: {
            adelhyde: 4,
            bronsonExtract: 0,
            powderedDelta: 1,
            flanergide: 2,
            karmotrine: 3,
            rocks: true,
            aged: true,
            blended: false
        },
        flavorText: 'It\'s so unnecessarily brown....',
        flavorTypes: ['Spicy', 'Promo', 'Bland']
    },
    {
        name: 'Blue Fairy',
        cost: 170,
        index: 5,
        ingredients: {
            adelhyde: 4,
            bronsonExtract: 0,
            powderedDelta: 0,
            flanergide: 1,
            karmotrine: 'optional',
            rocks: false,
            aged: true,
            blended: false
        },
        flavorText: 'One of these will make all your teeth turn blue. Hope you brushed them well.',
        flavorTypes: ['Sweet', 'Girly', 'Soft']
    },
    {
        name: 'Brandtini',
        cost: 250,
        index: 6,
        ingredients: {
            adelhyde: 6,
            bronsonExtract: 0,
            powderedDelta: 3,
            flanergide: 0,
            karmotrine: 1,
            rocks: false,
            aged: true,
            blended: false
        },
        style: {
            paddingRight: '4.2rem'
        },
        flavorText: '8 out of 10 smug assholes would recommend it but they\'re too busy being smug assholes.',
        flavorTypes: ['Sweet', 'Classy', 'Happy']
    },
    {
        name: 'Cobalt Velvet',
        cost: 280,
        index: 7,
        ingredients: {
            adelhyde: 2,
            bronsonExtract: 0,
            powderedDelta: 0,
            flanergide: 3,
            karmotrine: 5,
            rocks: true,
            aged: false,
            blended: false
        },
        style: {
            paddingRight: '4.2rem'
        },
        flavorText: 'It\'s like champaigne served on a cup that had a bit cola left.',
        flavorTypes: ['Bubbly', 'Classy', 'Burning']
    },
    {
        name: 'Crevice Spike',
        cost: 140,
        index: 8,
        ingredients: {
            adelhyde: 0,
            bronsonExtract: 0,
            powderedDelta: 2,
            flanergide: 4,
            karmotrine: 'optional',
            rocks: false,
            aged: false,
            blended: true
        },
        style: {
            paddingRight: '6.50rem'
        },
        flavorText: 'It will knock the drunkenness out of you or knock you out cold.',
        flavorTypes: ['Sour', 'Manly', 'Sobering']
    },
    {
        name: 'Fluffy Dream',
        cost: 170,
        index: 9,
        ingredients: {
            adelhyde: 3,
            bronsonExtract: 0,
            powderedDelta: 3,
            flanergide: 0,
            karmotrine: 'optional',
            rocks: false,
            aged: true,
            blended: false
        },
        style: {
            paddingRight: '3.2rem'
        },
        flavorText: 'A couple of these will make your tongue feel velvet-y. More of them and you\'ll be sleeping soundly.',
        flavorTypes: ['Sour', 'Girly', 'Soft']
    },
    {
        name: 'Sugar Rush',
        cost: 170,
        index: 20,
        ingredients: {
            adelhyde: 4,
            bronsonExtract: 0,
            powderedDelta: 0,
            flanergide: 1,
            karmotrine: 'optional',
            rocks: false,
            aged: true,
            blended: false
        },
        flavorText: 'One of these will make all your teeth turn blue. Hope you brushed them well.',
        flavorTypes: ['Sweet', 'Girly', 'Soft']
    }
];

export default drinks;
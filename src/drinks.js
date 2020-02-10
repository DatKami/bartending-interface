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
            optionalKarmotrine: false,
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
            optionalKarmotrine: false,
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
            optionalKarmotrine: false,
            rocks: false,
            aged: false,
            blended: true
        },
        flavorText: 'Say the name of this drink three time in front of a mirror and you\'ll look like a fool.',
        flavorTypes: ['Spicy', 'Classic', 'Sobering']
    }
];

export default drinks;
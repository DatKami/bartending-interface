import Absinthe from './assets/absinthe.png';
import MulanTea from './assets/mulantea.png';
import Rum from './assets/rum.png';
import Plumfume from './assets/plumfume.png';
import BadTouch from './assets/badtouch.png';
import Beer from './assets/beer.png';
import BleedingJane from './assets/bleedingjane.png';
import BloomLight from './assets/bloomlight.png';
import BlueFairy from './assets/bluefairy.png';
import Brandtini from './assets/brandtini.png';
import CobaltVelvet from './assets/cobaltvelvet.png';
import CreviceSpike from './assets/crevicespike.png';
import FluffyDream from './assets/fluffydream.png';
import FringeWeaver from './assets/fringeweaver.png';
import FrothyWater from './assets/frothywater.png';
import GrizzlyTemple from './assets/grizzlytemple.png';
import GutPunch from './assets/gutpunch.png';
import Marsblast from './assets/marsblast.png';
import MercuryBlast from './assets/mercuryblast.png';
import Moonblast from './assets/moonblast.png';
import PianoMan from './assets/pianoman.png';
import PianoWoman from './assets/pianowoman.png';
import Piledriver from './assets/piledriver.png';
import SparkleStar from './assets/sparklestar.png';
import SugarRush from './assets/sugarrush.png';
import SunshineCloud from './assets/sunshinecloud.png';
import Suplex from './assets/suplex.png';
import ZenStar from './assets/zenstar.png';

const drinks = [
    {
        name: 'Bad Touch',
        shorthand: 'Bad Touch',
        image: BadTouch,
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
        shorthand: 'Beer',
        image: Beer,
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
        shorthand: 'Bleed Jane',
        image: BleedingJane,
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
        shorthand:'Bloom Lght',
        image: BloomLight,
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
        shorthand: 'Blue Fairy',
        image: BlueFairy,
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
        shorthand: 'Brandtini',
        image: Brandtini,
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
        shorthand: 'Coblt Vlvt',
        image: CobaltVelvet,
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
        shorthand: 'Crv Spike',
        image: CreviceSpike,
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
        shorthand: 'Flff Dream',
        image: FluffyDream,
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
        name: 'Fringe Weaver',
        shorthand: 'Frng Weavr',
        image: FringeWeaver,
        cost: 260,
        index: 10,
        ingredients: {
            adelhyde: 1,
            bronsonExtract: 0,
            powderedDelta: 0,
            flanergide: 0,
            karmotrine: 9,
            rocks: false,
            aged: true,
            blended: false
        },
        style: {},
        flavorText: 'It\'s like drinking ethylic alcohol with a spoonful of sugar.',
        flavorTypes: ['Bubbly', 'Classy', 'Strong']
    },
    {
        name: 'Frothy Water',
        shorthand: 'Frothy Wtr',
        image: FrothyWater,
        cost: 150,
        index: 11,
        ingredients: {
            adelhyde: 1,
            bronsonExtract: 1,
            powderedDelta: 1,
            flanergide: 1,
            karmotrine: 0,
            rocks: false,
            aged: true,
            blended: false
        },
        style: {
            paddingRight: '6.8rem'
        },
        flavorText: 'PG-rated shows\' favorite Beer ersatz since 2040.',
        flavorTypes: ['Bubbly', 'Classic', 'Bland']
    },
    {
        name: 'Grizzly Temple',
        shorthand: 'Grizz Tmpl',
        image: GrizzlyTemple,
        cost: 220,
        index: 12,
        ingredients: {
            adelhyde: 3,
            bronsonExtract: 3,
            powderedDelta: 3,
            flanergide: 0,
            karmotrine: 1,
            rocks: false,
            aged: false,
            blended: true
        },
        style: {},
        flavorText: 'This one\'s kinda unbearable. It\'s mostly for fans of the movie it was used in.',
        flavorTypes: ['Bitter', 'Promo', 'Bland']
    },
    {
        name: 'Gut Punch',
        shorthand: 'Gut Punch',
        image: GutPunch,
        cost: 80,
        index: 13,
        ingredients: {
            adelhyde: 0,
            bronsonExtract: 5,
            powderedDelta: 0,
            flanergide: 1,
            karmotrine: 'optional',
            rocks: false,
            aged: true,
            blended: false
        },
        style: {},
        flavorText: 'It\'s supposed to mean "a punch made of innards", but the name actually describes what you feel while drinking it.',
        flavorTypes: ['Bitter', 'Manly', 'Strong']
    },
    {
        name: 'Marsblast',
        shorthand: 'Marsblast',
        image: Marsblast,
        cost: 170,
        index: 14,
        ingredients: {
            adelhyde: 0,
            bronsonExtract: 6,
            powderedDelta: 1,
            flanergide: 4,
            karmotrine: 2,
            rocks: false,
            aged: false,
            blended: true
        },
        style: {
            paddingRight: '6.8rem'
        },
        flavorText: 'One of these is enough to leave your face red like the actual planet.',
        flavorTypes: ['Spicy', 'Manly', 'Strong']
    },
    {
        name: 'Mercury Blast',
        shorthand: 'Mercryblst',
        image: MercuryBlast,
        cost: 250,
        index: 15,
        ingredients: {
            adelhyde: 1,
            bronsonExtract: 1,
            powderedDelta: 3,
            flanergide: 3,
            karmotrine: 2,
            rocks: true,
            aged: false,
            blended: true
        },
        style: {
            paddingRight: '5.8rem'
        },
        flavorText: 'No thermometer was harmed in the creation of this drink.',
        flavorTypes: ['Sour', 'Classy', 'Burning']
    },
    {
        name: 'Moonblast',
        shorthand: 'Moonblast',
        image: Moonblast,
        cost: 180,
        index: 16,
        ingredients: {
            adelhyde: 6,
            bronsonExtract: 0,
            powderedDelta: 1,
            flanergide: 1,
            karmotrine: 2,
            rocks: true,
            aged: false,
            blended: true
        },
        style: {
            paddingRight: '3.8rem'
        },
        flavorText: 'No relation to the Hadron cannon you can see on the moon for one week every month.',
        flavorTypes: ['Sweet', 'Girly', 'Happy']
    },
    {
        name: 'Piano Man',
        shorthand: 'Piano Man',
        image: PianoMan,
        cost: 320,
        index: 17,
        ingredients: {
            adelhyde: 2,
            bronsonExtract: 3,
            powderedDelta: 5,
            flanergide: 5,
            karmotrine: 3,
            rocks: true,
            aged: false,
            blended: false
        },
        style: {},
        flavorText: 'This drink does not represent the opinions of the Bar pianists Union or its associates.',
        flavorTypes: ['Sour', 'Promo', 'Strong']
    },
    {
        name: 'Piano Woman',
        shorthand: 'P. Woman',
        image: PianoWoman,
        cost: 320,
        index: 18,
        ingredients: {
            adelhyde: 5,
            bronsonExtract: 5,
            powderedDelta: 2,
            flanergide: 3,
            karmotrine: 3,
            rocks: false,
            aged: true,
            blended: false
        },
        style: {},
        flavorText: 'It was originally called Pretty Woman, but too many people complained there should be a Piano Woman if there was a Piano Man.',
        flavorTypes: ['Sweet', 'Promo', 'Happy']
    },
    {
        name: 'Piledriver',
        shorthand: 'Piledriver',
        image: Piledriver,
        cost: 160,
        index: 19,
        ingredients: {
            adelhyde: 0,
            bronsonExtract: 3,
            powderedDelta: 0,
            flanergide: 3,
            karmotrine: 4,
            rocks: false,
            aged: false,
            blended: false
        },
        style: {
            paddingRight: '3.3rem'
        },
        flavorText: 'It doesn\'t burn as hard on the tongue but you better not have a sore throat when drinking it..',
        flavorTypes: ['Bitter', 'Manly', 'Burning']
    },
    {
        name: 'Sparkle Star',
        shorthand: 'Spark Star',
        image: SparkleStar,
        cost: 150,
        index: 20,
        ingredients: {
            adelhyde: 2,
            bronsonExtract: 0,
            powderedDelta: 1,
            flanergide: 0,
            karmotrine: 'optional',
            rocks: false,
            aged: true,
            blended: false
        },
        style: {},
        flavorText: 'They used to actually sparkle, but too many complaints about skin problem made them redesign the drink without the sparkling.',
        flavorTypes: ['Sweet', 'Girly', 'Happy']
    },
    {
        name: 'Sugar Rush',
        shorthand: 'Sugar Rush',
        image: SugarRush,
        cost: 150,
        index: 21,
        ingredients: {
            adelhyde: 2,
            bronsonExtract: 0,
            powderedDelta: 1,
            flanergide: 0,
            karmotrine: 'optional',
            rocks: false,
            aged: false,
            blended: false
        },
        flavorText: 'Sweet, light and fruity. As girly as it gets.',
        flavorTypes: ['Sweet', 'Girly', 'Happy']
    },
    {
        name: 'Sunshine Cloud',
        shorthand: 'Sun Cloud',
        image: SunshineCloud,
        cost: 150,
        index: 22,
        ingredients: {
            adelhyde: 2,
            bronsonExtract: 2,
            powderedDelta: 0,
            flanergide: 0,
            karmotrine: 'optional',
            rocks: true,
            aged: false,
            blended: true
        },
        flavorText: 'Tastes like old chocolate milk with its good smell intact. Some say it tastes like caramel too...',
        flavorTypes: ['Bitter', 'Girly', 'Soft']
    },
    {
        name: 'Suplex',
        shorthand: 'Suplex',
        image: Suplex,
        cost: 160,
        index: 23,
        ingredients: {
            adelhyde: 0,
            bronsonExtract: 4,
            powderedDelta: 0,
            flanergide: 3,
            karmotrine: 3,
            rocks: true,
            aged: false,
            blended: false
        },
        style: {
            paddingRight: '6.3rem'
        },
        flavorText: 'A small twist on the Piledriver, putting more emphasis on the tongue burning and less on the throat burning.',
        flavorTypes: ['Bitter', 'Manly', 'Burning']
    },
    {
        name: 'Zen Star',
        shorthand: 'Zen Star',
        image: ZenStar,
        cost: 210,
        index: 24,
        ingredients: {
            adelhyde: 4,
            bronsonExtract: 4,
            powderedDelta: 4,
            flanergide: 4,
            karmotrine: 4,
            rocks: true,
            aged: false,
            blended: false
        },
        flavorText: 'You\'d think something so balanced would actually taste nice... you\'d be dead wrong.',
        flavorTypes: ['Sour', 'Promo', 'Bland']
    },
    {
        name: 'Absinthe',
        shorthand: 'Absinthe',
        image: Absinthe,
        bottledDrinksIndex: 1,
        index: 25,
        cost: 500,
        flavorText: 'Puke-green\nFairy'
    },
    {
        name: 'Rum',
        shorthand: 'Rum',
        image: Rum,
        bottledDrinksIndex: 2,
        index: 26,
        cost: 500,
        flavorText: 'Grandpa\nBooze'
    },
    {
        name: 'A Fedora',
        shorthand: 'Plumfume',
        image: Plumfume,
        bottledDrinksIndex: 3,
        index: 27,
        cost: 500,
        flavorText: 'W/ perfume\n& a plum'
    },
    {
        name: 'Mulan Tea',
        shorthand: 'Tea',
        image: MulanTea,
        bottledDrinksIndex: 4,
        index: 28,
        cost: 500,
        flavorText: 'Spiced Tea'
    }
];

export default drinks;
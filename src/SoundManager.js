import UIfx from 'uifx';
import hoverSFX from './assets/hover.mp3';
import tabSFX from './assets/tab.mp3';
import {isMobile} from 'react-device-detect';

const settings = {
        volume: 1,
        throttleMs: 100
    },
    tabSound = new UIfx(tabSFX, settings),
    hoverSound = new UIfx(hoverSFX, settings),
    SoundManager = {
        playHoverSound: () => { !isMobile && hoverSound.play()},
        playSelectSound: () => { tabSound.play() }
    };

export default SoundManager; 
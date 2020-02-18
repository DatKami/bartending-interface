import UIfx from 'uifx';
import hoverSFX from './assets/hover.mp3';
import tabSFX from './assets/tab.mp3';
import {isMobile} from 'react-device-detect';

const tabSound = new UIfx(
    tabSFX,
    {
        volume: .1,
        throttleMs: 100
    }
),
hoverSound = new UIfx(
    hoverSFX,
    {
        volume: .1,
        throttleMs: 100
    }
),
SoundManager = {
    playHoverSound: () => { !isMobile && hoverSound.play()},
    playSelectSound: () => { tabSound.play() }
};

export default SoundManager; 
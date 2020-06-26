import UIfx from 'uifx';
import hoverSFX from './assets/hover.mp3';
import tabSFX from './assets/tab.mp3';
import optionsGroupSFX from './assets/optionselect.mp3';
import drinkSFX from './assets/drinkselect.mp3';
import openSFX from './assets/open.mp3';
import startupSFX from './assets/startup.mp3';
import {isMobile} from 'react-device-detect';

const settings = {
        volume: 1,
        throttleMs: 100
    },
    quieterSettings = {
        volume: .7,
        throttleMs: 100
    },
    tabSound = new UIfx(tabSFX, settings),
    hoverSound = new UIfx(hoverSFX, settings),
    optionsGroupSound = new UIfx(optionsGroupSFX, quieterSettings),
    drinkSound = new UIfx(drinkSFX, quieterSettings),
    openSound = new UIfx(openSFX, quieterSettings),
    startupSound = new UIfx(startupSFX, settings),
    SoundManager = {
        playHoverSound: () => { !isMobile && hoverSound.play()},
        playTabSound: () => { tabSound.play() },
        playDrinkSound: () => { drinkSound.play() },
        playOptionsGroupSound: () => { optionsGroupSound.play() },
        playOpenSound: () => { openSound.play() },
        playStartupSound: () => { startupSound.play() }
    };

export default SoundManager; 
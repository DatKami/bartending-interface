import React from 'react';
import hoverSFX from './assets/hover.mp3';
import UIfx from 'uifx';
import {isMobile} from 'react-device-detect';
import {AppContext} from './AppContext';
  
const hoverSound = new UIfx(
    hoverSFX,
    {
        volume: .5,
        throttleMs: 100
    }
)

function OptionsGroup(props) {
  const context = React.useContext(AppContext),
    onClick = () => {
      const { index } = props;
      context.setActiveOptionsGroup(index);
    },
    playHoverSound = () => {
      !isMobile && hoverSound.play();
    };

  return (
    <div 
      className={'option ' + (props.index === props.currentIndex ? 'selected' : '')} 
      onClick={onClick}
      onMouseEnter={playHoverSound}
    >
      {props.name}
    </div>
  );
}

export default OptionsGroup;
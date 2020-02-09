import React from 'react';
import hoverSFX from './assets/hover.mp3';
import UIfx from 'uifx';
import {isMobile} from 'react-device-detect';

const hoverSound = new UIfx(
    hoverSFX,
    {
        volume: .5,
        throttleMs: 100
    }
)

class OptionSelect extends React.Component {
    onClick = () => {
      const { index, onClick, clearActiveTab } = this.props;
      clearActiveTab();
      onClick(index);
    }
  
    playHoverSound = () => {
        !isMobile && hoverSound.play();
    }
  
    render() {
      return (
        <div 
          className='option' 
          onClick={this.onClick}
          onMouseEnter={this.playHoverSound}
        >
          {this.props.name}
        </div>
      );
    }
  }

  export default OptionSelect;
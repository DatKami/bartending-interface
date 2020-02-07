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

class OptionsGroup extends React.Component {
    onClick = () => {
      const { index, onClick } = this.props;
      onClick(index);
    }
  
    playHoverSound = () => {
      !isMobile && hoverSound.play();
    }

  
    render() {
      return (
        <div 
          className={'option ' + (this.props.index === this.props.currentIndex ? 'selected' : '')} 
          onClick={this.onClick}
          onMouseEnter={this.playHoverSound.bind(this)}
        >
          {this.props.name}
        </div>
      );
    }
  }

  export default OptionsGroup;
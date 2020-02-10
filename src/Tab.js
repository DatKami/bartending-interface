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

class Tab extends React.Component {
    onClick = () => {
      const { index, setActiveTab } = this.props;
      setActiveTab(index);
    }
  
    playHoverSound = () => {
        !isMobile && hoverSound.play();
    }
  
    render() {
      return (
        <div 
          className={"System-window-tab " + (this.props.selected ? 'selected' : '')}
          onClick={this.onClick}
        >
            {this.props.title}
        </div>  
      );
    }
  }

  export default Tab;
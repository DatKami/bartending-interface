import React from 'react';
import {AppContext} from './AppContext';
  
function OptionsGroup(props) {
  const context = React.useContext(AppContext),
    onClick = () => {
      const { index } = props;
      context.navigation.setActiveOptionsGroup(index);
    };

  return (
    <div 
      className={'option ' + (props.index === props.currentIndex ? 'selected' : '')} 
      onClick={onClick}
      onMouseEnter={context.soundManager.playHoverSound}
    >
      {props.name}
    </div>
  );
}

export default OptionsGroup;
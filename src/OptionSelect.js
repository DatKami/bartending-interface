import React from 'react';
import {AppContext} from './AppContext';



function OptionSelect(props) {
    const context = React.useContext(AppContext),
          onClick = () => {
            const { index, clearActiveTab } = props;
            clearActiveTab();
            context.setActiveOption(index);
          };
  
    return (
      <div 
        className='option' 
        onClick={onClick}
        onMouseEnter={context.soundManager.playHoverSound}
      >
        {props.name}
      </div>
    );
  }

  export default OptionSelect;
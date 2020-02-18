import React from 'react';
import {AppContext} from './AppContext';


function Tab(props) {
  const context = React.useContext(AppContext),
        onClick = () => {
          const { index } = props;
          context.navigation.setActiveTab(index);
        };
    
  return (
    <div 
      className={"System-window-tab " + (props.selected ? 'selected' : '')}
      onClick={onClick}
    >
      {props.title}
    </div>  
  );
}

  export default Tab;
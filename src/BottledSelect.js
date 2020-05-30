import React from 'react';
import {AppContext} from './AppContext';



function BottledSelect(props) {
    const context = React.useContext(AppContext),
          onClick = () => {
            const { index } = props;
            context.navigation.setBottledDrink(index);
          };
  
    return (
        <div 
            className='option'
            onClick={onClick}
            onMouseEnter={context.soundManager.playHoverSound}
        >
            <div className="image">
                <img src={props.drink.image} alt={''}/>
            </div>
            <div className="text">
                <div className="title">{props.drink.name}</div>
                <div className="description">"{props.drink.flavorText}"</div>
            </div>
        </div>
    );
  }

  export default BottledSelect;


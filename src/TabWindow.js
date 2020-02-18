import React from 'react';
import OptionsGroup from './OptionsGroup';
import OptionSelect from './OptionSelect';
import DrinkWindow from './DrinkWindow';
import {titleCase} from './util';

function TabWindow(props) {
    return (
        <div className="tab-window">
            {isNaN(props.activeOption) &&
                <div className={'System-window-inner-sort ' + props.className}>
                    <div className="System-window-inner-sort-left">
                        <div className="System-window-inner-sort-title">
                        Search by: {titleCase(props.name)}
                        </div>
                        <div className='sort-options'>
                            {props.options.map((option, i) => {
                                return (
                                    <OptionsGroup 
                                        {...option} 
                                        index={i}
                                        key={i}
                                        currentIndex={props.activeOptionsGroup}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="sort-right">
                        {props.activeOptionsGroup !== undefined && props.options[props.activeOptionsGroup].options.map((option, i) => {
                            return (
                                <OptionSelect 
                                    index={option-1}
                                    key={option}
                                    name={props.allDrinks[option - 1].name}
                                />
                            );
                        })}
                    </div>
                </div>
            }
            {!isNaN(props.activeOption) &&
                <DrinkWindow
                    drink={props.allDrinks[props.activeOption]}
                    totalDrinks={props.allDrinks.length}
                />
            }
        </div>
    );
}

export default TabWindow;
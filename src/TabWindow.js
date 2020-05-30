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
                    {!props.isBottledDrinks &&
                        <div>
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
                    {props.isBottledDrinks &&
                        <div>
                            <div className='sort-options'>
                                {props.allDrinks.filter(drink => drink.bottledDrinksIndex || drink.bottledDrinksIndex === 0).map((drink) => {
                                    return (
                                        <div className='option'>
                                            <div className="image">
                                                <img src={drink.image} alt={''}/>
                                            </div>
                                            <div className="text">
                                                <div className="title">{drink.name}</div>
                                                <div className="description">"{drink.flavorText}"</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="bottled-drinks-copy">
                                "Every drink here is priced at $500"
                                <br></br>
                                -Dana
                            </div>
                        </div>
                    }
                </div>
            }
            {!isNaN(props.activeOption) &&
                <DrinkWindow
                    drink={props.allDrinks[props.activeOption]}
                    totalDrinks={props.allDrinks.filter(drink => !drink.bottledDrinksIndex && !(drink.bottledDrinksIndex === 0)).length}
                />
            }
        </div>
    );
}

export default TabWindow;
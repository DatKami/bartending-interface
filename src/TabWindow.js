import React from 'react';
import OptionsGroup from './OptionsGroup';
import OptionSelect from './OptionSelect';
import DrinkWindow from './DrinkWindow';
import {titleCase} from './util';

class TabWindow extends React.Component {
    render() {
      return (
        <div className="tab-window">
            {isNaN(this.props.activeOption) &&
                <div className={'System-window-inner-sort ' + this.props.className}>
                    <div className="System-window-inner-sort-left">
                        <div className="System-window-inner-sort-title">
                        Search by: {titleCase(this.props.name)}
                        </div>
                        <div className='sort-options'>
                            {this.props.options.map((option, i) => {
                                return (
                                    <OptionsGroup 
                                        {...option} 
                                        index={i}
                                        key={i}
                                        currentIndex={this.props.activeOptionsGroup}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="sort-right">
                        {this.props.activeOptionsGroup !== undefined && this.props.options[this.props.activeOptionsGroup].options.map((option, i) => {
                            return (
                                <OptionSelect 
                                    index={option-1}
                                    key={option}
                                    name={this.props.allDrinks[option - 1].name}
                                    clearActiveTab={this.props.clearActiveTab}
                                />
                            );
                        })}
                    </div>
                </div>
            }
            {!isNaN(this.props.activeOption) &&
                <DrinkWindow
                    drink={this.props.allDrinks[this.props.activeOption]}
                    totalDrinks={this.props.allDrinks.length}
                    navNextDrink={this.props.navNextDrink}
                    navPrevDrink={this.props.navPrevDrink}
                />
            }
        </div>
      );
    }
}

export default TabWindow;
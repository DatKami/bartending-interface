import React from 'react';
import UIfx from 'uifx';
import OptionsGroup from './OptionsGroup';
import OptionSelect from './OptionSelect';
import DrinkWindow from './DrinkWindow';
import tabSFX from './assets/tab.mp3';

const tabSound = new UIfx(
    tabSFX,
    {
        volume: .5,
        throttleMs: 100
    }
)

class TabWindow extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        activeOptionsGroup: 0,
        activeOption: 0
      };
    }
    // type, header, optionsType, optionGroups, options
  
    setActiveOptionsGroup = (i) => {
        if (i !== this.state.activeOptionsGroup) {
            this.setState({
                activeOptionsGroup: i
            });
            tabSound.play();
        }
    }

    setActiveOption = (i) => {
        if (i !== this.state.activeOption) {
            this.setState({
                activeOption: i
            });
            tabSound.play();
        }
    }

    clearActiveOption = () => {
        this.setState({
            activeOption: undefined
        });
        tabSound.play();
    }

    render() {
      return (
        <div>
            {isNaN(this.state.activeOption) &&
                <div className="System-window-inner-sort">
                    <div className="System-window-inner-sort-left">
                        <div className="System-window-inner-sort-title">
                        Search by: {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}
                        </div>
                        <div className={this.props.className}>
                            {this.props.options.map((option, i) => {
                                return (
                                    <OptionsGroup 
                                        {...option} 
                                        onClick={this.setActiveOptionsGroup} 
                                        index={i}
                                        key={i}
                                        currentIndex={this.state.activeOptionsGroup}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="sort-right">
                        {this.state.activeOptionsGroup !== undefined && this.props.options[this.state.activeOptionsGroup].options.map((option, i) => {
                            return (
                                <OptionSelect 
                                    index={option-1}
                                    key={option}
                                    name={this.props.allDrinks[option - 1].name}
                                    onClick={this.setActiveOption}
                                />
                            );
                        })}
                    </div>
                </div>
            }
            {!isNaN(this.state.activeOption) &&
                <DrinkWindow
                    drink={this.props.allDrinks[this.state.activeOption]}
                    onClick={this.clearActiveOption}
                />
            }
        </div>
      );
    }
}

export default TabWindow;
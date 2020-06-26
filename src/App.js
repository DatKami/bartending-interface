import React from 'react';
import './App.scss';
import './scanlines.scss';
import TabWindow from './TabWindow';
import Tab from './Tab';
import calicomp from './assets/calicomp.png';
import drinks from './drinks';
import {AppContext} from './AppContext';
import SoundManager from './SoundManager';

const tabs = [
  {
    title: 'By Name',
    windowInfo: {
      name: 'name',
      className: 'sort-name',
      perRow: 2,
      isBottledDrinks: false,
      options: [
        {
          name: 'B',
          options: [1, 2, 3, 4, 5, 6]
        },
        {
          name: 'C',
          options: [7, 8]
        },
        {
          name: 'F',
          options: [9, 10, 11]
        },
        {
          name: 'G',
          options: [12, 13]
        },
        {
          name: 'M',
          options: [14, 15, 16]
        },
        {
          name: 'P',
          options: [17, 18, 19]
        },
        {
          name: 'S',
          options: [20, 21, 22, 23]
        },
        {
          name: 'Z',
          options: [24]
        },
      ]
    }
  },
  {
    title: 'By Flavor',
    windowInfo: {
      name: 'flavor',
      className: 'sort-flavor',
      perRow: 1,
      isBottledDrinks: false,
      options: [
        {
          name: 'Sweet Drinks',
          options: [21, 20, 5, 16, 6, 17]
        },
        {
          name: 'Bitter Drinks',
          options: [22, 13, 19, 23, 12]
        },
        {
          name: 'Sour Drinks',
          options: [9, 8, 1, 15, 24]
        },
        {
          name: 'Spicy Drinks',
          options: [14, 3, 4]
        },
        {
          name: 'Bubbly Drinks',
          options: [2, 11, 7, 10]
        }
      ]
    }
  },
  {
    title: 'By Type',
    windowInfo: {
      name: 'type',
      className: 'sort-flavor',
      perRow: 1,
      isBottledDrinks: false,
      options: [
        {
          name: 'Girly Drinks',
          options: [21, 20, 5, 9, 22, 16]
        },
        {
          name: 'Manly Drinks',
          options: [13, 19, 23, 14, 8]
        },
        {
          name: 'Classic Drinks',
          options: [2, 3, 11]
        },
        {
          name: 'Classy Drinks',
          options: [1, 6, 7, 10, 15]
        },
        {
          name: 'Promo Drinks',
          options: [12, 4, 24, 17, 18]
        }
      ]
    }
  },
  {
    title: 'Bottled Drinks',
    windowInfo: {
      isBottledDrinks: true,
      className: 'sort-bottled',
      options: [
        25, 26, 27, 28
      ]
    }
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: undefined,
      activeOptionsGroup: undefined,
      activeOption: undefined,
      activeBottledDrink: undefined,
      startup: true,
      startupSequence: false,
      startBlinder: false,
      startupButton: true,
      scanlines: false
    };
  }

  setActiveOptionsGroup = (i) => {
      if (i !== this.state.activeOptionsGroup) {
          this.setState({
              activeOptionsGroup: i
          });
          SoundManager.playOptionsGroupSound();
      }
  }

  setActiveOption = (i) => {
      if (i !== this.state.activeOption) {
          this.setState({
              activeOption: i,
              activeBottledDrink: undefined
          });
          SoundManager.playDrinkSound();
      }
  }

  setActiveTab = (i) => {
      if (i !== this.state.activeTab) {
          this.setState({
              activeTab: i,
              activeOptionsGroup: undefined,
              activeOption: undefined,
              activeBottledDrink: undefined,
              startup: false
          });
          SoundManager.playTabSound();
      }
  }

  setBottledDrink = (i) => {
    if (i !== this.state.activeBottledDrink) {
        this.setState({
            activeOption: undefined,
            activeBottledDrink: i
        });
        SoundManager.playOptionsGroupSound();
    }
  }

  clearActiveTab() {
    this.setState({
      activeTab: undefined
    });
  }

  navNextDrink() {
    if (this.state.activeOption < drinks.filter(drink => !drink.bottledDrinksIndex && !(drink.bottledDrinksIndex === 0)).length -1) {
      this.setState({
          activeOption: this.state.activeOption + 1
      })
      SoundManager.playOptionsGroupSound();
    } else {
      SoundManager.playDrinkSound();
    }
  }

  navPrevDrink() {
    if (this.state.activeOption > 0) {
      this.setState({
          activeOption: this.state.activeOption - 1
      })
      SoundManager.playOptionsGroupSound();
    } else {
      SoundManager.playDrinkSound();
    }
  }

  setStartupSequence(startup) {
    this.setState({
      startupSequence: startup,
      startupButton: false,
      startBlinder: !startup
    });
    startup && SoundManager.playStartupSound();
  }

  toggleScanlines() {
    this.setState({
      scanlines: !this.state.scanlines
    });
  }

  render() {
    return (
      <div className={"App" + (this.state.scanlines ? " scanlines" : "")}>
        <AppContext.Provider value={{
          navigation: {
            setActiveOption: this.setActiveOption,
            setActiveOptionsGroup: this.setActiveOptionsGroup,
            setActiveTab: this.setActiveTab,
            setBottledDrink: this.setBottledDrink,
            clearActiveTab: this.clearActiveTab.bind(this),
            navNextDrink: this.navNextDrink.bind(this),
            navPrevDrink: this.navPrevDrink.bind(this)
          },
          soundManager: SoundManager
        }}>
          <div className="System">
            <div 
              className={"System-window-maintain-aspect" + (this.state.startBlinder ? " play" : "")}
              onAnimationEnd={SoundManager.playOpenSound}
            >
              <div className="System-window">
                <div className="System-window-tab-bar">
                  {tabs.map((tab, index) => { return (
                    <Tab 
                      {...tab}
                      selected={this.state.activeTab === index}
                      index={index}
                      key={index}
                    />
                  )})
                  }
                </div>

                <div className="System-window-inner">
                  {
                    <TabWindow 
                      {...(this.state.activeTab || this.state.activeTab === 0 ? tabs[this.state.activeTab].windowInfo : {})} // TODO: ?? 0 needs to be a number or crashes
                      allDrinks={drinks} 
                      activeOption={this.state.activeOption}
                      activeOptionsGroup={this.state.activeOptionsGroup}
                      activeBottledDrink={this.state.activeBottledDrink}
                      startup={this.state.startup}
                    />
                  }
                </div>
                <div className="System-window-inner-decoration left"></div>
                <div className="System-window-inner-decoration right"></div>
                <div className="System-window-inner-decoration bottom"></div>
              </div>
            </div>
            
            <div className={"blinder" + (this.state.startBlinder ? " play" : "")} >
            </div>

            {this.state.startupSequence && 
              <div 
                className="startup"
                onAnimationEnd={() => {
                  this.setStartupSequence(false);
                }}
              >
                <div className="calicomp">
                  <img src={calicomp} alt={''}/>
                </div>
                <div className="calicomp-blinder blinder1"></div>
                <div className="calicomp-blinder blinder2"></div>

                <div className="copyright">
                  Copyright (c) Keeree Joe Group. 206X.
                </div>
                <div className="copyright-small">
                  CALICOMP and KJG are registered trademarks of Banjo Group.
                </div>
              </div>
            }

            {this.state.startupButton && 
              <div className="bootscreen">
                <div 
                  className="calicomp"
                >
                  <img src={calicomp} alt={''}/>
                </div>
                <div className="calicomp-blinder"></div>
                <div
                  className="pre-button startup-button"
                  onClick={() => this.setStartupSequence(true)}
                >
                  Start Up
                </div>
                <div 
                  className="pre-button fast-boot-button"
                  onClick={() => this.setStartupSequence(false)}
                >
                  Fast Boot
                </div>
                <div 
                  className="pre-button scanlines-button"
                  onClick={this.toggleScanlines.bind(this)}
                >
                  Scanlines
                </div>
                <div className="hover-label startup-label">
                  Launches the start up animation. (15s duration)
                </div>
                <div className="hover-label fast-boot-label">
                  Boots immediately into the bartending interface program.
                </div>
                <div className="hover-label scanlines-label">
                  Toggles scanlines. (Might be bad)
                </div>

                <div className="copyright">
                  Assets from or derivative of VA-11 Hall-A, Sukeban Games.
                </div>
                <div className="copyright-small">
                  Programmed by github@datkami
                </div>
              </div>
            }

            <div className="System-sidebar">
              <div className="System-sidebar-calicomp">
                <img src={calicomp} alt={''}/>
              </div>

              {(this.state.activeBottledDrink || this.state.activeBottledDrink === 0) &&
                <div className="drink-preview">
                  <div className="drink-picture">
                    <img src={drinks.filter(drink => drink.bottledDrinksIndex === this.state.activeBottledDrink)[0].image} alt={''}></img>
                  </div>
                  
                  <div className="drink-name">
                    {drinks.filter(drink => drink.bottledDrinksIndex === this.state.activeBottledDrink)[0].shorthand}
                  </div>
                </div>
              }

              {(this.state.activeOption || this.state.activeOption === 0) &&
                <div className="drink-preview">
                  <div className="drink-picture">
                    <img src={drinks[this.state.activeOption].image} alt={''}></img>
                  </div>
                  
                  <div className="drink-name">
                    {drinks[this.state.activeOption].shorthand}
                  </div>
                </div>
              }
            </div>
          </div>
        </AppContext.Provider>
      </div>
    )
  }
}

export default App;

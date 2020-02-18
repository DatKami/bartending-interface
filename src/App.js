import React from 'react';
import './App.scss';
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
          options: [1, 2, 3, 4, 5]
        },
        {
          name: 'C',
          options: []
        },
        {
          name: 'F',
          options: []
        },
        {
          name: 'G',
          options: []
        },
        {
          name: 'M',
          options: []
        },
        {
          name: 'P',
          options: []
        },
        {
          name: 'S',
          options: [6]
        },
        {
          name: 'Z',
          options: []
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
          options: [6, 5]
        },
        {
          name: 'Bitter Drinks',
          options: []
        },
        {
          name: 'Sour Drinks',
          options: [1]
        },
        {
          name: 'Spicy Drinks',
          options: [3, 4]
        },
        {
          name: 'Bubbly Drinks',
          options: [2]
        }
      ]
    }
  },
  {
    title: 'By Type'
  },
  {
    title: 'Bottled Drinks'
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: undefined,
      activeOptionsGroup: undefined,
      activeOption: 4
    };
  }

  setActiveOptionsGroup = (i) => {
      if (i !== this.state.activeOptionsGroup) {
          this.setState({
              activeOptionsGroup: i
          });
          SoundManager.playSelectSound();
      }
  }

  setActiveOption = (i) => {
      if (i !== this.state.activeOption) {
          this.setState({
              activeOption: i
          });
          SoundManager.playSelectSound();
      }
  }

  setActiveTab = (i) => {
      if (i !== this.state.activeTab) {
          this.setState({
              activeTab: i,
              activeOptionsGroup: undefined,
              activeOption: undefined
          });
          SoundManager.playSelectSound();
      }
  }

  clearActiveOption = () => {
      this.setState({
          activeOption: undefined
      });
      SoundManager.playSelectSound();
  }

  clearActiveTab() {
    this.setState({
      activeTab: undefined
    });
  }

  navNextDrink() {
    if (this.state.activeOption < drinks.length -1) {
      this.setState({
          activeOption: this.state.activeOption + 1
      })
      SoundManager.playSelectSound();
    }
  }

  navPrevDrink() {
    if (this.state.activeOption > 0) {
      this.setState({
          activeOption: this.state.activeOption - 1
      })
      SoundManager.playSelectSound();
    }
  }

  render() {
    return (
      <div className="App">
        <AppContext.Provider value={{
          navigation: {
            setActiveOption: this.setActiveOption,
            setActiveOptionsGroup: this.setActiveOptionsGroup,
            setActiveTab: this.setActiveTab,
            clearActiveTab: this.clearActiveTab.bind(this),
            navNextDrink: this.navNextDrink.bind(this),
            navPrevDrink: this.navPrevDrink.bind(this)
          },
          soundManager: SoundManager
        }}>
          <div className="System">
            <div className="System-window-maintain-aspect">
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
                  <TabWindow 
                    {...tabs[this.state.activeTab ?? 0].windowInfo} // TODO: ?? 0 needs to be a number or crashes
                    allDrinks={drinks} 
                    activeOption={this.state.activeOption}
                    activeOptionsGroup={this.state.activeOptionsGroup}
                  />
                </div>
                <div className="System-window-inner-decoration left"></div>
                <div className="System-window-inner-decoration right"></div>
                <div className="System-window-inner-decoration bottom"></div>
              </div>
            </div>
            <div className="System-sidebar">
              <div className="System-sidebar-calicomp">
                <img src={calicomp} alt={''}/>
              </div>
            </div>
          </div>
        </AppContext.Provider>
      </div>
    )
  }
}

export default App;

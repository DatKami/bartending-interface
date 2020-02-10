import React from 'react';
import './App.scss';
import TabWindow from './TabWindow';
import Tab from './Tab';
import calicomp from './assets/calicomp.png';
import UIfx from 'uifx';
import tabSFX from './assets/tab.mp3';
import drinks from './drinks';


const tabSound = new UIfx(
  tabSFX,
  {
      volume: .5,
      throttleMs: 100
  }
)

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
          options: []
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

  setActiveTab = (i) => {
      if (i !== this.state.activeTab) {
          this.setState({
              activeTab: i,
              activeOptionsGroup: undefined,
              activeOption: undefined
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
      tabSound.play();
    }
  }

  navPrevDrink() {
    if (this.state.activeOption > 0) {
      this.setState({
          activeOption: this.state.activeOption - 1
      })
      tabSound.play();
    }
  }

  render() {
    return (
      <div className="App">
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
                    setActiveTab={this.setActiveTab}
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
                  setActiveOption={this.setActiveOption}
                  setActiveOptionsGroup={this.setActiveOptionsGroup}
                  clearActiveTab={this.clearActiveTab.bind(this)}
                  navNextDrink={this.navNextDrink.bind(this)}
                  navPrevDrink={this.navPrevDrink.bind(this)}
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
      </div>
    )
  }
}

export default App;

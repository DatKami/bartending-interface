import React from 'react';
import './App.scss';
import TabWindow from './TabWindow';
import calicomp from './assets/calicomp.png';
import UIfx from 'uifx';
import tabSFX from './assets/tab.mp3';


const tabSound = new UIfx(
  tabSFX,
  {
      volume: .5,
      throttleMs: 100
  }
)

const options = [
  {
    name: 'Bad Touch',
    cost: 250,
    index: 1,
    ingredients: {
      adelhyde: 0,
      bronsonExtract: 2,
      powderedDelta: 2,
      flanergide: 2,
      karmotrine: 4,
      optionalKarmotrine: false,
      rocks: true,
      aged: false,
      blended: false
    },
    style: {
      paddingRight: '2.5rem'
    },
    flavorText: 'We\'re nothing but mammals after all.',
    flavorTypes: ['Sour', 'Classy', 'Vintage']
  },  
  {
    name: 'Beer',
    cost: 200,
    index: 2,
    ingredients: {
      adelhyde: 1,
      bronsonExtract: 2,
      powderedDelta: 1,
      flanergide: 2,
      karmotrine: 4,
      optionalKarmotrine: false,
      rocks: false,
      aged: false,
      blended: false
    },
    flavorText: 'Traditionally-brewed beer has become a luxury, but this one\'s pretty close to the real deal...',
    flavorTypes: ['Bubbly', 'Classy', 'Vintage']
  },  
  {
    name: 'Bleeding Jane',
    cost: 200,
    index: 3,
    ingredients: {
      adelhyde: 0,
      bronsonExtract: 1,
      powderedDelta: 3,
      flanergide: 3,
      karmotrine: 0,
      optionalKarmotrine: false,
      rocks: false,
      aged: false,
      blended: true
    },
    flavorText: 'Say the name of this drink three time in front of a mirror and you\'ll look like a fool.',
    flavorTypes: ['Spicy', 'Classic', 'Sobering']
  }
];

const byName = {
  name: 'name',
  className: 'sort-name',
  perRow: 2,
  isBottledDrinks: false,
  options: [
    {
      name: 'B',
      options: [1,2,3]
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
};

const tabs = [
  {
    title: 'By Name'
  },
  {
    title: 'By Flavor'
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
      activeTab: 0,
      activeOptionsGroup: 0,
      activeOption: undefined
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
              activeTab: i
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

  render() {
    return (
      <div className="App">
        <div className="System">
          <div className="System-window-maintain-aspect">
            <div className="System-window">
              <div className="System-window-tab-bar">
                {tabs.map((tab, index) => { return (
                  <div className={"System-window-tab " + (this.state.activeTab === index ? 'selected' : '')}>
                    {tab.title}
                  </div>  
                )})
                }
              </div>
              <div className="System-window-inner">
                <TabWindow 
                  {...byName} 
                  allDrinks={options} 
                  activeOption={this.state.activeOption}
                  activeOptionsGroup={this.state.activeOptionsGroup}
                  setActiveOption={this.setActiveOption}
                  setActiveOptionsGroup={this.setActiveOptionsGroup}
                  clearActiveTab={this.clearActiveTab.bind(this)}
                  clearActiveOption={this.clearActiveOption.bind(this)}
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

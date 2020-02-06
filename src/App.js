import React from 'react';
import './App.scss';
import hoverSFX from './assets/hover.mp3';
import tabSFX from './assets/tab.mp3';
import calicomp from './assets/calicomp.png';
import Sound from 'react-sound';
import UIfx from 'uifx';
import {isMobile} from 'react-device-detect';

const options = [
  {
    name: 'Bad Touch',
    index: 1,
    ingredients: {
      adelhyde: 0,
      bronsonExtract: 2,
      powderedDelta: 2,
      flanergide: 2,
      karmotrine: 4,
      rocks: true,
      aged: false,
      blended: false
    }
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
      options: [0]
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

const tabSound = new UIfx(
  tabSFX,
  {
    volume: .5,
    throttleMs: 100
  }
)

const hoverSound = new UIfx(
  hoverSFX,
  {
    volume: .5,
    throttleMs: 100
  }
)

class OptionsGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: {
        playStatus: Sound.status.STOPPED,
        playFromPosition: 0
      },
      tab: {
        playStatus: Sound.status.STOPPED,
        playFromPosition: 0
      }
    };
  }
  
  onClick = () => {
    const { index, onClick } = this.props;
    onClick(index);
  }

  playHoverSound = () => {
    // this.setState({
    //   hover: {
    //     playStatus: Sound.status.PLAYING,
    //     playFromPosition: 0
    //   }
    // })
    !isMobile && hoverSound.play();
  }

  stopTabSound = () => {
    this.setState({
      tab: {
        playStatus: Sound.status.STOPPED
      }
    })
  }

  stopHoverSound = () => {
    this.setState({
      hover: {
        playStatus: Sound.status.STOPPED
      }
    })
  }

  render() {
    return (
      <div 
        className={'option ' + (this.props.index === this.props.currentIndex ? 'selected' : '')} 
        onClick={this.onClick}
        onMouseEnter={this.playHoverSound.bind(this)}
      >
        <Sound 
          url={hoverSFX}
          playStatus={this.state.hover.playStatus}
          playFromPosition={this.state.hover.playFromPosition}
          volume={50}
          autoLoad={true}
          onFinishedPlaying={this.stopHoverSound.bind(this)}
        />
        {/* <Sound 
          url={tabSFX}
          playStatus={this.state.tab.playStatus}
          playFromPosition={this.state.tab.playFromPosition}
          volume={50}
          autoLoad={true}
          onFinishedPlaying={this.stopTabSound.bind(this)}
        /> */}
        {this.props.name}
      </div>
    );
  }
}

class TabWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeOptionsGroup: null
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

  render() {
    return (
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
                  currentIndex={this.state.activeOptionsGroup}
                />
              );
            })}
          </div>
        </div>
        <div className="System-window-inner-sort-right">
  
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div className="System">
        <div className="System-window-maintain-aspect">
          <div className="System-window">
            <div className="System-window-tab-bar">
              <div className="System-window-tab selected">
                By Name
              </div>
              <div className="System-window-tab">
                By Flavor
              </div>
              <div className="System-window-tab">
                By Type
              </div>
              <div className="System-window-tab">
                Bottled Drinks
              </div>
            </div>
            <div className="System-window-inner">
              <TabWindow {...byName}></TabWindow>
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
  );
}

export default App;

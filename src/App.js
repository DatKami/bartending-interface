import React from 'react';
import './App.css';

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
                <div className="System-window-inner-sort">
                  Edit src/App.js and save to reload.
                </div>
              </div>
            </div>
          </div>
          <div className="System-sidebar">
            <div className="System-sidebar-calicomp">
              <p>
                bottom text
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;

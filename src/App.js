import React from 'react';
import './App.scss';

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
                  <div className="System-window-inner-sort-left">
                    <div className="System-window-inner-sort-title">
                      Search by: Name
                    </div>
                    <div className="System-window-inner-sort-name-options">
                      <div className="System-window-inner-sort-name-option selected">
                        B
                      </div>
                      <div className="System-window-inner-sort-name-option">
                        C
                      </div>
                      <div className="System-window-inner-sort-name-option">
                        F
                      </div>
                      <div className="System-window-inner-sort-name-option">
                        G
                      </div>
                      <div className="System-window-inner-sort-name-option">
                        M
                      </div>
                      <div className="System-window-inner-sort-name-option">
                        P
                      </div>
                      <div className="System-window-inner-sort-name-option">
                        S
                      </div>
                      <div className="System-window-inner-sort-name-option">
                        Z
                      </div>
                    </div>
                  </div>
                  <div className="System-window-inner-sort-right">

                  </div>
                </div>
              </div>
              <div className="System-window-inner-decoration left"></div>
              <div className="System-window-inner-decoration right"></div>
              <div className="System-window-inner-decoration bottom"></div>
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

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <nav className="top-nav">
          <div className="nav-item selected">Nav Item 1</div>
          <div className="nav-item">Nav Item 2</div>
          <div className="nav-item">Nav Item 3</div>
        </nav>

        <div id="main">

          <div className="grid-header-bar">
            <div className="grid-area-1">
              <div className="grid-header-1">List of Awesome</div>
              <div className="separator">|</div>
              <div className="grid-header-2">Sort by:</div>
              <div className="sort-by-dropdown">County</div>
            </div>

            <div className="grid-area-2">
              <div className="grid-header-2">items per page:</div>
              <div className="items-dropdown">10</div>
              <div className="paging">
                <div className="paging-number">1-10</div>
                <div className="grid-header-of">of</div>
                <div className="paging-total">30</div>
                <div className="paging-previous fa fa-angle-left"></div>
                <div className="paging-next fa fa-angle-right"></div>
              </div>
            </div>
          </div>

          <div className="grid">
            <table>
              <thead>
                <tr>
                  <th id="first-name-col">First Name</th>
                  <th>Last Name</th>
                  <th>Country</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chris</td>
                  <td>Morse</td>
                  <td>United States</td>
                  <td>123 blah st</td>
                  <td>Seattle</td>
                  <td>WA</td>
                  <td>98101</td>
                  <td>555-555-1212</td>
                </tr>
                <tr>
                  <td>Chris</td>
                  <td>Morse</td>
                  <td>United States</td>
                  <td>123 blah st</td>
                  <td>Seattle</td>
                  <td>WA</td>
                  <td>98101</td>
                  <td>555-555-1212</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

      </div>
    );
  }
}

export default App;

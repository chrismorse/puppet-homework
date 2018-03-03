import React, { Component } from 'react';
import './App.css';
import myData from './data.json';   // sample data to be replaced by AJAX call.


class SortBy extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedValue: 'First Name' }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var sortValue = event.target.value;
    this.setState({selectedValue: sortValue});
    this.props.onChangeSort(sortValue);
  }

  render() {
    return (
      <div className="selectSortBy">
        <select defaultValue={this.state.selectedValue} onChange={this.handleChange}>
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
          <option value="country">Country</option>
          <option value="city">City</option>
          <option value="state">State</option>
        </select>
      </div>
    );
  }
}

class ItemsPerPage extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedValue: 10 }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var itemValue = event.target.value;
    this.setState({selectedValue: itemValue});
    this.props.onChangeItemsPerPage(itemValue);
  }

  render() {
    return (
      <div className="selectItems">
        <select defaultValue={this.state.selectedValue} onChange={this.handleChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
        </select>
      </div>
    );
  }
}


class Previous extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <div className={"paging-previous fa fa-angle-left" + (this.props.inactive ? ' inactive' : '' )} onClick={this.handleClick}></div>
    );
  }
}

class Next extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <div className={"paging-next fa fa-angle-right" + (this.props.inactive ? ' inactive' : '' )} onClick={this.handleClick}></div>
    );
  }
}




const Address = (props) => {
  return (
      <tr>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.country}</td>
        <td>{props.address}</td>
        <td>{props.city}</td>
        <td>{props.state}</td>
        <td>{props.zip}</td>
        <td>{props.phone}</td>
      </tr>
  );
}

const AddressList = (props) => {
  return (
    <tbody>
      {props.addresses.map(address => <Address key={address._id} {...address} />)}
    </tbody>
    
  );
}


const Grid = (props) => {
  return (
    <div className="grid">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Country</th>
            <th id="address">Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone</th>
          </tr>
        </thead>
        <AddressList addresses={props.addresses} />
      </table>
    </div>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = { 
      addresses: [],
      startIndex: 1,
      itemsPerPage: 10,
      endIndex: 10,
      currentView: []
    }

    this.sortData = this.sortData.bind(this);
    this.handleChangeItemsPerPage = this.handleChangeItemsPerPage.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }
  
  componentDidMount() {
    this.loadData();
  }

  loadData() {
    // replace with AJAX call
    const addresses = myData

    // store addresses
    this.setState({addresses: addresses}, () => {this.sortData('firstName')});
  }

  sortData(sortBy) {
    // sort entire list and store it sorted
    let addresses = this.state.addresses;

    addresses.sort((a,b) => {
      return a[sortBy] < b[sortBy] ? -1 : a[sortBy] > b[sortBy] ? 1 : 0
    });
    
    this.setState({addresses: addresses, startIndex: 1}, () => {this.createView()});
  }

  createView() {
    let startSlice = this.state.startIndex - 1;
    if (startSlice > this.state.addresses.length) {
      startSlice = this.state.addresses.length - this.state.itemsPerPage;
    }

    let endSlice = this.state.startIndex + this.state.itemsPerPage - 1;
    if (endSlice > this.state.addresses.length) {
      endSlice = this.state.addresses.length;
    }

    let currentView = this.state.addresses.slice(startSlice, endSlice);
    this.setState({currentView: currentView, endIndex: endSlice});
  }

  handleChangeItemsPerPage(itemsPerPage) {
    this.setState({itemsPerPage: parseInt(itemsPerPage, 10), startIndex: 1}, () => {this.createView()});
  }

  handleNext() {
    let newStartIndex = this.state.startIndex + this.state.itemsPerPage;
    if (newStartIndex < this.state.addresses.length) {
      this.setState({startIndex: newStartIndex}, () => {this.createView()});
    }
  }

  handlePrevious() {
    let newStartIndex = this.state.startIndex - this.state.itemsPerPage;
    if (newStartIndex < 0) {
      newStartIndex = 1;  
    }
    let endIndex = newStartIndex + this.state.itemsPerPage;

    this.setState({startIndex: newStartIndex, endIndex: endIndex}, () => {this.createView()});
  }



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
              <div className="grid-header-sortby">Sort by:</div>
              <div className="sort-by-dropdown">
                <SortBy onChangeSort={this.sortData} />
              </div>
            </div>

            <div className="grid-area-2">
              <div className="grid-header-items">items per page:</div>
              <div className="items-dropdown">
                <ItemsPerPage onChangeItemsPerPage={this.handleChangeItemsPerPage} />
              </div>
              <div className="paging">
                <div className="paging-number">{this.state.startIndex}-{this.state.endIndex}</div>
                <div className="grid-header-of">of</div>
                <div className="paging-total">{this.state.addresses.length}</div>
                <Previous onClick={this.handlePrevious} inactive={(this.state.startIndex === 1 ? true : false)}/>
                <Next onClick={this.handleNext} inactive={(this.state.endIndex === this.state.addresses.length ? true : false)}/>
              </div>
            </div>
          </div>

          <Grid addresses={this.state.currentView} />

        </div>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';



class SortBy extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedValue: 'First Name' }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({selectedValue: event.target.value});
  }

  render() {
    return (
      <select defaultValue={this.state.selectedValue} onChange={this.handleChange}>
        <option value="First Name">First Name</option>
        <option value="Last Name">Last Name</option>
        <option value="Country">Country</option>
        <option value="City">City</option>
        <option value="State">State</option>
      </select>
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
  constructor(props) {
    super(props);
    this.state = { addressesSorted: [] }
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {

    //replace with AJAX
    const addresses = [
      {
        "_id": 1,
        "firstName": "Chris",
        "lastName": "Morse",
        "country": "USA",
        "street": "555 My Street St",
        "city": "Seattle",
        "state": "WA",
        "zip": "98101",
        "phone": "555-555-5555"
      },
      {
        "_id": 2,
        "firstName": "Gouda",
        "lastName": "Man",
        "country": "USA",
        "street": "222555 My Street St",
        "city": "Spokane",
        "state": "WA",
        "zip": "98199",
        "phone": "555-511-5555"
      }
    ] 

    var addressesSorted = addresses;   //sort & paginate this!

    console.log(addressesSorted)

    this.setState({addressesSorted: addressesSorted});
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
              <div className="grid-header-2">Sort by:</div>
              <div className="sort-by-dropdown">
              <SortBy />
              </div>
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

          <Grid addresses={this.state.addressesSorted} />

        </div>

      </div>
    );
  }
}

export default App;

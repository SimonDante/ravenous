import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '../src/components/BusinessList/BusinessList.js';
//import Business from '../src/components/Business/Business.js';
import SearchBar from '../src/components/SearchBar/SearchBar.js';
import Yelp from './util/Yelp';

const business = {};

const businesses = [];

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			businesses: []
		};

		this.searchYelp = this.searchYelp.bind(this);
	}



	searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({
        'businesses': businesses
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses}/>
      </div>
     
    );
  }
}

export default App;

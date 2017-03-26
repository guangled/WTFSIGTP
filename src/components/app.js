import React, { Component } from 'react';
import GoogleMap from './google_map';
import MainButton from './main_button';

export default class App extends Component {
  render() {
    return (
    <div className="app">
      
      <GoogleMap />
	</div>            
    );
  }
}

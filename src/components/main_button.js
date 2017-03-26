/*
* @Author: guangled
* @Date:   2017-03-25 17:59:37
* @Last Modified by:   guangled
* @Last Modified time: 2017-03-26 01:22:03
*/
import React, { Component } from 'react';
import { fetchEvent } from '../actions/index';

class MainButton extends Component {
	constructor(props) {
		super(props);

			var oArgs = {

        app_key:"VhnW57qbDxHMZ5js",
        location: "Los Angeles",
        within: 10,
        page_size: 50,
        page_number: 1,
        date: "Today"
  		}
  		this.state={
  			data: [],
  			index: 0
  		};

			EVDB.API.call("/events/search", oArgs, function(oData) {
				console.log('request:', oData.events);
				// Note: this relies on the custom toString() methods below
				const request = oData.events.event;
				this.setState({data: request});
		  });

			nextEvent(){
				var index = this.state.index;
				this.state.data[index];
				this.setState({index + 1});
			}

			this.nextEvent = this.nextEvent.bind(this);
	}

	render() {
		return (
			<button
				type="button"
				className="button"
				onClick={this.nextEvent}>Change</button>
		);
	}
}

export default MainButton;
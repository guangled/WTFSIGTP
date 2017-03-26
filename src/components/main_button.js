/*
* @Author: guangled
* @Date:   2017-03-25 17:59:37
* @Last Modified by:   guangled
* @Last Modified time: 2017-03-26 03:45:48
*/
import React, { Component } from 'react';

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

  		this.nextEvent = this.nextEvent.bind(this);
			this.processData = this.processData.bind(this);

			EVDB.API.call("/events/search", oArgs, this.processData);
			
	}

			processData(oData) {
				// console.log('request:', oData.events);
				// Note: this relies on the custom toString() methods below
				const request = oData.events.event;
				this.setState({data: request});
				this.nextEvent();
		  }

			nextEvent(){
				var index = this.state.index;
				var event = this.state.data[index];
				// console.log(event.latitude, event.longitude);
				this.setState({index: index + 1});
				var latv = this.state.data[index].latitude;
				var lonv = this.state.data[index].longitude;
				this.props.drawb(latv, lonv);
			}



	render() {

		return (
				<button
					type="button"
					className="button" 
					onClick={this.nextEvent}>Change
				</button>
		);
	}
}

export default MainButton;
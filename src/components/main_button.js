/*
* @Author: guangled
* @Date:   2017-03-25 17:59:37
* @Last Modified by:   guangled
* @Last Modified time: 2017-03-26 03:45:48
*/
import React, { Component } from 'react';
import Detail from './detail';
import Description from './Description';

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
  			index: 0,
			msg : "",
			des :"",
			arr : []
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

				this.state.msg = this.state.data[index].title;

				this.state.des = this.state.data[index].description;

               this.props.drawb(latv, lonv);
			}



	render() {
		if(this.state.index == 0 ) {
			if(this.state.data[0]){
                this.state.msg = this.state.data[0].title;
                this.state.des = this.state.data[0].description;
			}

		}
		//console.log(this.state.arr);
		if(!this.state.msg) this.state.msg = "untitled";
		if(!this.state.des) this.state.des = "no description";
		return (
		<div>
			<table className="table">
				<tr>
					<th><Detail msg={this.state.msg} /></th>
					<th><button
						type="button"
						className="button btn btn-primary"
						onClick={this.nextEvent}>Change
					</button></th>
				</tr>
				{/*<tr>*/}
					{/*<td>{this.props.dis}</td>*/}
					{/*<td>{this.props.dur}</td>*/}
				{/*</tr>*/}

			</table>
			<Description des = {this.state.des}/>

		</div>

		);
	}
}

export default MainButton;